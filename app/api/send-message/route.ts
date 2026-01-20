import { NextRequest, NextResponse } from "next/server";

/**
 * API Route: Send Contact Form Message to Telegram
 * 
 * Environment Variables Required:
 * - TELEGRAM_BOT_TOKEN: Your Telegram bot token (get from @BotFather)
 * - TELEGRAM_CHAT_ID: Your Telegram chat ID (get from @userinfobot)
 * 
 * Setup Instructions:
 * 1. Create a bot with @BotFather on Telegram
 * 2. Get your chat ID by messaging @userinfobot
 * 3. Add both values to your .env.local file
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get Telegram bot token and chat ID from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram bot token or chat ID not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Format the message for Telegram
    const telegramMessage = `
📧 *New Contact Form Message*

👤 *Name:* ${name}
📧 *Email:* ${email}
📌 *Subject:* ${subject}
💬 *Message:*
${message}
---
_Received from Portfolio Website_
    `.trim();

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
