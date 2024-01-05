import axios from "axios";
import pinataSDK, { PinataPinOptions } from "@pinata/sdk";

// 환경 변수 로드
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY || "";
const PINATA_SECRET = process.env.NEXT_PUBLIC_PINATA_SECRET || "";

const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET);

// 이미지 URL을 IPFS에 업로드하는 함수
async function uploadImageToIPFS(imageUrl: string): Promise<void> {
  try {
    const response = await axios.get<ReadableStream>(imageUrl, {
      responseType: "stream",
    });

    const options: PinataPinOptions = {
      pinataMetadata: {
        name: "MyImage",
        keyvalues: {
          description: "My uploaded image",
        },
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };

    const result = await pinata.pinFileToIPFS(response.data, options);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// 함수 사용 예시 (임시 URL)
uploadImageToIPFS("https://example.com/path/to/image.png");
