/**
 * This script adds a "GitHub Code" badge in full-browser view
 */

function main() {
  if (window.location.hostname.split(".")[1] === "id") return;

  // Theme is passed from the script tag, default blue
  const themes = {
    dark: { fg: "#F5F9FC", bg: "#130F26" },
    light: { fg: "#130F26", bg: "#F5F9FC" },
    red: { fg: "#F5F9FC", bg: "#FA4B4B" },
    orange: { fg: "#F5F9FC", bg: "#D96D00" },
    yellow: { fg: "#F5F9FC", bg: "#A68A00" },
    lime: { fg: "#F5F9FC", bg: "#639400" },
    green: { fg: "#F5F9FC", bg: "#00A11B" },
    teal: { fg: "#F5F9FC", bg: "#0093B0" },
    blue: { fg: "#F5F9FC", bg: "#0F87FF" },
    blurple: { fg: "#F5F9FC", bg: "#8E78FF" },
    purple: { fg: "#F5F9FC", bg: "#B266FF" },
    magenta: { fg: "#F5F9FC", bg: "#EB3BEB" },
    pink: { fg: "#F5F9FC", bg: "#F545BA" },
  };
  const color = themes[document.currentScript.getAttribute("theme") || "blue"];

  const badge = `
    <style>
    #badge {
      position: fixed;
      cursor: pointer;
      bottom: 16px;
      right: 16px;
      z-index: 1000;
      background-color: ${color.bg};
      color: ${color.fg};
      padding: 0.3em 0.75em;
      border-radius: 0.3em;
      font-size: 1.25em;
      text-decoration: none;
      box-shadow: 3px 3px 3px black;
    }
  
    #badge div {
      opacity: 0.7;
      transition-property: opacity, transform;
      transition: opacity 120ms, transform 120ms;
      transition-timing-function: ease-out;
    }
  
    #badge:hover div {
      transform: scale(1.07);
      opacity: 1;
    }
    </style>
    
    <a id="badge" href="">
        <div>Code on GitHub</div>
    </a>
    `;

  document.body.insertAdjacentHTML("beforeend", badge);
}

main();
