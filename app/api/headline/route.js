import { NextResponse } from "next/server";

export async function GET(request) {
  const randomRecords = generateRandomRecords(500);
  return NextResponse.json(randomRecords);
}
function generateRandomRecords(count) {
  const randomRecords = [];

  for (let i = 0; i < count; i++) {
    const randomRecord = {
      id: i + 1,
      name: generateRandomName(),
    };

    randomRecords.push(randomRecord);
  }

  return randomRecords;
}

function generateRandomName() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
  ];
  return names[Math.floor(Math.random() * names.length)];
}
