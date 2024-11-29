
import pandas as pd
import matplotlib.pyplot as plt
import json

def parse_value(value: str, default: float = 0.0) -> float:
    """文字列をfloatに変換。変換できない場合はデフォルト値を返す"""
    try:
        return float(value.replace("ms", "").replace("Mbps", ""))
    except ValueError:
        return default

# JSONファイルの読み込み
with open("all_speed_reports.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# データをフラットに変換
records = []
for report in data:
    key = f"{report['provider']} - {report['speedPlan']} - {report['houseType']}"
    records.append({
        "key": key,
        "type": "IPv4",
        "jitter": parse_value(report["ipv4"]["jitter"]),
        "ping": parse_value(report["ipv4"]["ping"]),
        "download": parse_value(report["ipv4"]["download"]),
        "upload": parse_value(report["ipv4"]["upload"]),
    })
    records.append({
        "key": key,
        "type": "IPv6",
        "jitter": parse_value(report["ipv6"]["jitter"]),
        "ping": parse_value(report["ipv6"]["ping"]),
        "download": parse_value(report["ipv6"]["download"]),
        "upload": parse_value(report["ipv6"]["upload"]),
    })

# Pandas DataFrameに変換
df = pd.DataFrame(records)

# プロバイダ + 速度プラン + 住宅の種類ごとに平均を計算
grouped = df.groupby(["key", "type"]).mean().reset_index()

# Ping値が優秀な上位5条件を選択
top5 = grouped.nsmallest(5, "ping")

# グラフ作成
fig, axs = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle("Top 5 Conditions by Ping (ms)", fontsize=16)

# グラフ1: Jitter
for i, row in top5.iterrows():
    axs[0, 0].bar(row["key"] + " (" + row["type"] + ")", row["jitter"])
axs[0, 0].set_title("Jitter (ms)")
axs[0, 0].set_ylabel("Jitter (ms)")
axs[0, 0].tick_params(axis='x', rotation=45, labelsize=8)

# グラフ2: Ping
for i, row in top5.iterrows():
    axs[0, 1].bar(row["key"] + " (" + row["type"] + ")", row["ping"])
axs[0, 1].set_title("Ping (ms)")
axs[0, 1].set_ylabel("Ping (ms)")
axs[0, 1].tick_params(axis='x', rotation=45, labelsize=8)

# グラフ3: Download
for i, row in top5.iterrows():
    axs[1, 0].bar(row["key"] + " (" + row["type"] + ")", row["download"])
axs[1, 0].set_title("Download Speed (Mbps)")
axs[1, 0].set_ylabel("Download Speed (Mbps)")
axs[1, 0].tick_params(axis='x', rotation=45, labelsize=8)

# グラフ4: Upload
for i, row in top5.iterrows():
    axs[1, 1].bar(row["key"] + " (" + row["type"] + ")", row["upload"])
axs[1, 1].set_title("Upload Speed (Mbps)")
axs[1, 1].set_ylabel("Upload Speed (Mbps)")
axs[1, 1].tick_params(axis='x', rotation=45, labelsize=8)

# レイアウト調整
plt.tight_layout(rect=[0, 0, 1, 0.96])

# グラフ保存
plt.savefig("top5_ping_conditions.png")
plt.show()

