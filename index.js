//Code originally written by Allvaa
const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");

const url = "https://ci.fredboat.com/repository/download/Lavalink_Build/.lastSuccessful/Lavalink.jar?guest=1&branch=refs/heads/dev";
const url2 = "https://github.com/shyiko/jabba/raw/master/install.sh"
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("Java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
