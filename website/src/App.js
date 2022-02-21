import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  Alert,
  createTheme,
  CircularProgress,
  Button,
  Paper,
  CssBaseline,
  ThemeProvider,
  styled,
} from "@mui/material";
import "./App.css";
import abi from "./utils/wavePortal.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Lets bring in a custom

export default function App() {
  /*
   * Just a state variable we use to store our user's public wallet.
   */
  const [currentAccount, setCurrentAccount] = useState("");
  const [mining, setMining] = useState(false);
  const [totalWaves, setTotalWaves] = useState(0);
  const contractAddress = "0x2133c1A44c6112C37ba8Ee3F96A69278080EFEDC";
  const contractABI = abi.abi;

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const count = await wavePortalContract.getTotalWaves();
      console.log("Retrieved total wave count...", count.toNumber());

      setTotalWaves(count.toNumber());
    } catch (err) {
      console.error("FUCK!");
      // throw new Error(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask! Can't disconnect whats not there!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      console.log(accounts);
      setCurrentAccount("");
      console.log("Disconnected", accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum && currentAccount !== "") {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave();
        setMining(true);

        console.log("Mining...", waveTxn.hash);
        // I guess we can throw in some sort of while mining flag to show a spinner
        await waveTxn.wait();
        setMining(false);
        console.log("Mined -- ", waveTxn.hash);

        const count = await wavePortalContract.getTotalWaves();
        setTotalWaves(count.toNumber());
        console.log(count);
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper style={{ height: "100vh" }}>
        <div className='mainContainer'>
          <div className='dataContainer'>
            <div className='header'>👋 Hey there!</div>

            <div className='bio'>
              Connect your Ethereum wallet and say something nice or say
              something awful!
            </div>
            {currentAccount && (
              <>
                <Button variant='contained' onClick={wave}>
                  {!mining ? (
                    "Wave at me"
                  ) : (
                    <CircularProgress color='inherit' />
                  )}
                </Button>
                <br />
              </>
            )}

            {/*
             * If there is no currentAccount render this button
             */}
            {!currentAccount ? (
              <Button variant='contained' onClick={connectWallet}>
                Connect Wallet
              </Button>
            ) : (
              <Button variant='contained' onClick={disconnectWallet}>
                Disconnect Wallet
              </Button>
            )}

            {totalWaves !== 0 && (
              <>
                <br />
                <Alert severity='info'>
                  Total number of waves = {totalWaves}
                </Alert>
              </>
            )}
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
