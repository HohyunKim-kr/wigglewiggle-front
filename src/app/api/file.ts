// app/api/file.ts
import formidable from "formidable";
import fs from "fs";
import pinataSDK from "@pinata/sdk";

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

// POST 요청 처리 함수
export async function action({ request }: { request: any }) {
  if (request.method === "POST") {
    const form = new formidable.IncomingForm();
    return new Promise((resolve, reject) => {
      form.parse(request, async (err, fields, files) => {
        if (err) {
          console.error(err);
          return reject(new Response("Upload Error", { status: 500 }));
        }
        const response = await saveFile(files.file);
        const { IpfsHash } = response;
        return resolve(new Response(IpfsHash));
      });
    });
  }
}

// GET 요청 처리 함수
export async function loader({ request }: { request: any }) {
  if (request.method === "GET") {
    try {
      // const response = await pinata.pinList(
      //   { pinataJWTKey: process.env.PINATA_JWT },
      //   { pageLimit: 1 }
      // );
      const response = await pinata.pinList(
        { pinataJWTKey: process.env.PINATA_JWT },
        {
          pageLimit: 1,
        }
      );
      return new Response(JSON.stringify(response.rows[0]));
    } catch (e) {
      console.error(e);
      return new Response("Server Error", { status: 500 });
    }
  }
}

// 파일 저장 함수
async function saveFile(file: any) {
  try {
    const stream = fs.createReadStream(file.filepath);
    const options = {
      pinataMetadata: {
        name: file.originalFilename,
      },
    };
    const response = await pinata.pinFileToIPFS(stream, options);
    fs.unlinkSync(file.filepath);

    return response;
  } catch (error) {
    console.error(error);
    throw new Error("File saving error");
  }
}
