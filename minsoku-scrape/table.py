import pandas as pd
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
    provider = report["provider"]
    records.append({
        "provider": provider,
        "type": "IPv4",
        "jitter": parse_value(report["ipv4"]["jitter"]),
        "ping": parse_value(report["ipv4"]["ping"]),
        "download": parse_value(report["ipv4"]["download"]),
        "upload": parse_value(report["ipv4"]["upload"]),
    })
    records.append({
        "provider": provider,
        "type": "IPv6",
        "jitter": parse_value(report["ipv6"]["jitter"]),
        "ping": parse_value(report["ipv6"]["ping"]),
        "download": parse_value(report["ipv6"]["download"]),
        "upload": parse_value(report["ipv6"]["upload"]),
    })

# Pandas DataFrameに変換
df = pd.DataFrame(records)

# 各プロバイダ、IPv4/IPv6ごとに平均値、最大値、中央値を計算
summary = df.groupby(["provider", "type"]).agg(
    jitter_mean=("jitter", "mean"),
    jitter_max=("jitter", "max"),
    jitter_median=("jitter", "median"),
    ping_mean=("ping", "mean"),
    ping_max=("ping", "max"),
    ping_median=("ping", "median"),
    download_mean=("download", "mean"),
    download_max=("download", "max"),
    download_median=("download", "median"),
    upload_mean=("upload", "mean"),
    upload_max=("upload", "max"),
    upload_median=("upload", "median"),
).reset_index()

# 表として出力
output_file = "provider_summary.csv"
summary.to_csv(output_file, index=False)
print(f"Summary has been saved to {output_file}")

# 表をコンソールに表示
print(summary)
