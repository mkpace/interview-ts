import "./styles.css";
import { reverse } from "./1-ts";
import { runwalk } from "./1-ts";
import { cbhell } from "./1-ts";
import { general } from "./1-ts";
import { dict } from "./1-ts";
// import { emitter } from "./2-node/2.2-events";
document.getElementById("reverse")!.innerHTML = reverse();
document.getElementById("runwalk")!.innerHTML = runwalk();
const cbHellEl = document.getElementById("cbhell");
cbHellEl!.innerHTML = "";
cbhell((result: string) => {
  cbHellEl!.innerHTML += `${result}</br>`;
});
document.getElementById("general")!.innerHTML = Boolean(
  general("ab", "bc")
).toString();
document.getElementById("dict")!.innerHTML = dict();
// emitter();
