
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

function getBaseUrl({
  prefectureId,
  areaId,
}: {
  prefectureId: number;
  areaId: number;
}): string {
  return `https://minsoku.net/speeds/optical/prefectures/${prefectureId}/areas/${areaId}`;
}

async function delay(ms = 200) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapePage({
  baseUrl,
  page,
}: {
  baseUrl: string;
  page: number;
}): Promise<Array<Record<string, any>>> {
  const url = `${baseUrl}?page=${page}`;
  const response = await fetch(url, {
    // headers: {
    //   "User-Agent":
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    // },
  });
  if (!response.ok) return [];
  const html = await response.text();
  const document = new DOMParser().parseFromString(html, "text/html");
  if (!document) return [];
  const reports: Array<Record<string, any>> = [];
  const entries = document.querySelectorAll(".font-size-little-big");
  entries.forEach((entry) => {
    const title = entry.querySelector("a")?.textContent?.trim() || "N/A";
    const detailsElement = entry.nextElementSibling;
    const ipv4Element = detailsElement?.nextElementSibling?.nextElementSibling;
    const ipv6Element = ipv4Element?.nextElementSibling?.nextElementSibling;
    if (!detailsElement || !ipv4Element || !ipv6Element) return;

    const detailsHTML = detailsElement.innerHTML
      .replace(/<br\s*\/?>/gi, "\n")
      .trim();
    const detailsLines = detailsHTML.split("\n").map((line) => line.trim());

    const typeMatch =
      detailsLines.find((line) => line.startsWith("回線タイプ:")) || "";
    const providerMatch =
      detailsLines.find((line) => line.startsWith("プロバイダ:")) || "";
    const planMatch =
      detailsLines.find((line) => line.startsWith("速度プラン:")) || "";
    const houseTypeMatch =
      detailsLines.find((line) => line.startsWith("住宅の種類:")) || "";

    const ipv4 = {
      jitter: ipv4Element.querySelector(".text-bold")?.textContent || "N/A",
      ping: ipv4Element.querySelectorAll(".text-bold")[1]?.textContent || "N/A",
      download:
        ipv4Element.querySelectorAll(".text-bold")[2]?.textContent || "N/A",
      upload:
        ipv4Element.querySelectorAll(".text-bold")[3]?.textContent || "N/A",
    };
    const ipv6 = {
      jitter: ipv6Element.querySelector(".text-bold")?.textContent || "N/A",
      ping: ipv6Element.querySelectorAll(".text-bold")[1]?.textContent || "N/A",
      download:
        ipv6Element.querySelectorAll(".text-bold")[2]?.textContent || "N/A",
      upload:
        ipv6Element.querySelectorAll(".text-bold")[3]?.textContent || "N/A",
    };

    reports.push({
      title,
      connectionType: typeMatch.replace("回線タイプ:", "").trim(),
      provider: providerMatch.replace("プロバイダ:", "").trim(),
      speedPlan: planMatch.replace("速度プラン:", "").trim(),
      houseType: houseTypeMatch.replace("住宅の種類:", "").trim(),
      ipv4,
      ipv6,
    });
  });
  return reports;
}

async function scrapeAllPages({
  baseUrl,
  startPage,
  endPage,
}: {
  baseUrl: string;
  startPage: number;
  endPage: number;
}) {
  const allReports: Array<Record<string, any>> = [];
  for (let page = startPage; page <= endPage; page++) {
    console.log(`Scraping page ${page}`);
    const pageReports = await scrapePage({ baseUrl, page });
    allReports.push(...pageReports);
    await delay();
  }
  const json = JSON.stringify(allReports, null, 2);
  await Deno.writeTextFile("all_speed_reports.json", json);
}

const prefectureId = 13; // 東京都
const areaId = 131121; // 世田谷区
const baseUrl = getBaseUrl({ prefectureId, areaId });
const startPage = 1;
const endPage = 500;

scrapeAllPages({ baseUrl, startPage, endPage });

