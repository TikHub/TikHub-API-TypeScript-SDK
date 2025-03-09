# **TikHub API TypeScript SDK**

[![NPM](https://img.shields.io/npm/v/@tikhub/tikhub-api-ts-sdk)](https://www.npmjs.com/package/@tikhub/tikhub-api-ts-sdk)
[![License](https://img.shields.io/github/license/TikHub/TikHub-API-TypeScript-SDK)](https://github.com/TikHub/TikHub-API-TypeScript-SDK/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/TikHub/TikHub-API-TypeScript-SDK)](https://github.com/TikHub/TikHub-API-TypeScript-SDK/stargazers)

The **TikHub API TypeScript SDK** provides an easy-to-use **TypeScript/JavaScript client** for interacting with the **TikHub API**, supporting platforms like **TikTok, Douyin, Instagram, and more**.

> @tikhub/tikhub-api-ts-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @tikhub/tikhub-api-ts-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

## **🌟 Features**

- 🚀 **Fully Typed TypeScript SDK** – Provides complete type definitions.
- 🔑 **API Key Authentication** – Secure access to TikHub API.
- ⚡ **Built with Axios** – Supports automatic request handling and retries.
- 🎯 **ES6+ Compatible** – Works in **Node.js, Webpack, Browserify**.

---

## **📦 Installation**

Install via **npm**:

```sh
npm install @tikhub/tikhub-api-ts-sdk --save
```

---

## **🔧 Configuration**

Before making API requests, configure the **API Client** with your **API Key** and ​**Base URL**​.

```ts
import { Configuration, ApiClient } from "@tikhub/tikhub-api-ts-sdk";

// Create an API configuration instance
const config = new Configuration({
  basePath: "https://api.tikhub.io",  // ✅ Set API base URL
  apiKey: "YOUR_API_KEY",             // ✅ Set API Key for authentication
});

// Create the API client instance
const client = new ApiClient(config);

console.log("TikHub API Client initialized!");
```

📌 **Replace `YOUR_API_KEY`** with your actual API key.

---

## **📌 API Usage Examples**

### 1️⃣ **Get a List of Hashtag Videos**

Fetch videos associated with a given hashtag.

```typescript
import { TikTokAppV3APIApi } from 'tikhub-api-sdk';

const api = new TikTokAppV3APIApi(config);

async function fetchHashtagVideos() {
  try {
    const response = await api.fetchHashtagVideoListApiV1TiktokAppV3FetchHashtagVideoListGet('dance', 0, 10);
    console.log('Hashtag Video List:', response.data);
  } catch (error) {
    console.error('Error fetching hashtag videos:', error);
  }
}

fetchHashtagVideos();
```

🔹 **Parameters:**

* `chId`: Hashtag ID (string)
* `cursor`: Pagination cursor (default: `0`)
* `count`: Number of results to fetch (default: `10`)

---

### 2️⃣ **Get Home Feed (Recommended Videos)**

Retrieve TikTok's recommended videos based on cookies.

```typescript
import { TikTokAppV3APIApi, TikTokAppV3HomeFeed } from 'tikhub-api-sdk';

const api = new TikTokAppV3APIApi(config);

async function fetchHomeFeed() {
  try {
    const requestBody: TikTokAppV3HomeFeed = {
      cookie: 'your_tiktok_cookie_here',
    };
    const response = await api.fetchHomeFeedApiV1TiktokAppV3FetchHomeFeedPost(requestBody);
    console.log('Home Feed:', response.data);
  } catch (error) {
    console.error('Error fetching home feed:', error);
  }
}

fetchHomeFeed();
```

🔹 **Parameters:**

* `cookie`: TikTok user cookie (optional, used for personalization)

---

### 3️⃣ **Get User Profile Data**

Retrieve TikTok user profile information.

```typescript
import { TikTokAppV3APIApi } from 'tikhub-api-sdk';

const api = new TikTokAppV3APIApi(config);

async function fetchUserProfile(userId: string) {
  try {
    const response = await api.fetchUserProfileApiV1TiktokAppV3FetchUserProfileGet(userId);
    console.log('User Profile:', response.data);
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

fetchUserProfile('123456789');
```

🔹 **Parameters:**

* `userId`: TikTok user ID (string)

----


