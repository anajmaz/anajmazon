import proxy from "../proxies/media"

const media = {
    discord: {
        id: "1063843237237903370",
        tag: "eutrevosa",
    },
    github: "anajmaz",
    email: "anajmazon@gmail.com"
}

export default new Proxy(media, proxy);

