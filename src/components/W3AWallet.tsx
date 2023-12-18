import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import YellowShortButton from "./YellowShortButton";
import { useEffect, useState } from "react";
import YellowLongButton from "./YellowLongButton";
import Web3 from "web3";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "@/redux/slice/authSlice";

const W3AWallet = () => {
  const Web3AuthOptions: Web3AuthOptions = {
    clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID!, // Get your Client ID from the Web3Auth Dashboard
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET, // import {WEB3AUTH_NETWORK} from "@web3auth/base";
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x1",
      rpcTarget: "https://rpc.ankr.com/eth", // This is the mainnet RPC we have added, please pass on your own endpoint while creating an app
    },
    uiConfig: {
      appName: "Wiggle Wiggle",
      mode: "auto", // light, dark or auto
      loginMethodsOrder: ["google", "github", "twitter", "kakao"],
      logoLight: "https://web3auth.io/images/web3auth-logo.svg",
      logoDark: "https://web3auth.io/images/web3auth-logo---Dark.svg",
      defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
      loginGridCol: 3,
      primaryButton: "socialLogin", // "externalLogin" | "socialLogin" | "emailLogin"
      modalZIndex: "99998",
    },
  };

  const web3auth = new Web3Auth(Web3AuthOptions);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function initialize() {
      await web3auth.initModal();
    }
    initialize();
  }, []);

  // subscribe to lifecycle events emitted by web3auth
  const subscribeAuthEvents = (web3auth: Web3Auth) => {
    web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
      console.log("connected to wallet", data);
      // web3auth.provider will be available here after user is connected
    });
    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("error", error);
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("error", error);
    });
  };
  return (
    <YellowLongButton
      text={"CONNECT WALLET"}
      onClickHandler={async () => {
        const web3authProvider = await web3auth.connect();
        const web3 = new Web3(web3authProvider!);
        setWeb3(web3);

        const userInfo = await web3auth.getUserInfo();
        console.log(userInfo);
        const address = (await web3!.eth.getAccounts())[0];
        console.log(address);
        dispatch(
          SET_USER_LOGIN({
            address: address,
            email: userInfo.email,
            nickname: userInfo.name,
            profileImage: userInfo.profileImage,
          })
        );
      }}
      margin="99px 0 0 0"
    />
  );
};

export default W3AWallet;
