import { NextResponse } from "next/server";

function generateRandomRecordsDetails(name) {
  const randomRecord = {
    id: generateRandomAge(),
    name: name,
    age: generateRandomAge(),
    headline: "ABCDEFGH",
    url: generateRandomURL(),
    date: generateRandomDate(),
  };

  return randomRecord;
}

function generateRandomURL() {
  const subdomain = generateRandomString();
  const domain = generateRandomString();
  const tld = generateRandomString(3);

  const randomURL = `www.${subdomain}.${domain}.${tld}`;
  return randomURL;
}

function generateRandomString(length = 3) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

// Example usage

function generateRandomDate() {
  const year = Math.floor(Math.random() * (2030 - 2000 + 1)) + 2000;
  const month = Math.floor(Math.random() * 12) + 1;
  const maxDaysInMonth = new Date(year, month, 0).getDate();
  const day = Math.floor(Math.random() * maxDaysInMonth) + 1;
  const formattedDate = `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
  return formattedDate;
}

function generateRandomAge() {
  return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
}

export async function GET(request) {
  const randomRecord = generateRandomRecordsDetails();
  return NextResponse.json(randomRecord);
}
