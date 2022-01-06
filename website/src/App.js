import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  /*
   * Just a state variable we use to store our user's public wallet.
   */
  const [currentAccount, setCurrentAccount] = useState("");

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
    } catch (err) {
      console.error("FUCK!");
      throw new Error(err);
    }

    /**
     * Check if we're authorized to access the user's wallet
     */
  };

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>👋 Hey there!</div>

        <div className='bio'>
          I am farza and I worked on self-driving cars so that's pretty cool
          right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className='waveButton' onClick={null}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
