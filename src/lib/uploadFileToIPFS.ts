const uploadFileToIPFS = async (imageUrl: string) => {
  try {
    const imageBlob = await (await fetch(imageUrl)).blob();
    const file = new File([imageBlob], "image.jpg", { type: imageBlob.type });

    // FormData 대신 JSON 데이터를 사용
    const data = {
      filename: file.name,
      contentType: file.type,
      content: await file.text(),
    };

    const res = await (
      await fetch("/api/files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    ).json();

    const ipfsHash = res.ipfsHash;
    return ipfsHash;
  } catch (e) {
    console.error(e);
    alert("Trouble uploading file");
  }
};

export default uploadFileToIPFS;
