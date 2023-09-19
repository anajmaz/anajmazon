import Dots from "@/components/Dots";

export default (t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img style="right: 33%;" src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img style="width: 83%;" src="/images/hero.png" alt="Ana Julia Mazon" class="hero__image">
                <div class="hero__status">${t.status} <a href="https://anajmaz.com.br">Portfolio</a></div>
            </div>
        </section>
    `;
};
