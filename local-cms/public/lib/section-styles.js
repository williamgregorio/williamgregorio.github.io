export function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --top-padding: 2em;
        --bottom-padding: 2em;
        --primary-color: #3f729b;
        --secondary-color: #a9d2d5;
        --header-gap: 18px;
        --small-gap: 8px;
        --text-gap: 16px;
        --soft-radius: 8px;

        --text-primary: #1e1b18;
        --text-secondary: #333333;
        --text-primary-light: #fefffe;
    }

    h1 {
        font-family: "Inter", sans-serif;
        font-weight: bold;
        font-optical-sizing: auto;
        font-style: normal;
        font-size: 3.1rem;
        line-height: 0.9;
        color: var(--text-primary);
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.3rem;
    }

    p {
        color: var(--text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
    }

    body {
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 400;
    }

    section {
        margin-top: 7%;
        scroll-margin-top: 125px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        font-family: "Inter", sans-serif;
        padding: 10px 20px;
        border: none;
        border-radius: var(--soft-radius);
        background: rgb(63, 114, 155);
        background: linear-gradient(
            90deg,
            rgba(63, 114, 155, 1) 0%,
                                    rgba(45, 108, 158, 1) 100%
        );
        color: var(--text-primary-light);
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition:
        transform 0.4s ease-in-out,
        grayscale 0.2s ease;
        box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
        filter: grayscale(30%);
    }

    button:hover,
    button:focus {
        filter: grayscale(0%);
        transform: translateY(-3px);
    }

    button:active {
        background-color: #1d3549;
        transform: translateY(1px);
    }

    button:disabled {
        background-color: #d7d7d7;
        color: #a9a9a9;
        cursor: not-allowed;
    }

    main {
        margin-left: 20%;
        margin-right: 20%;
    }

    header {
        padding-top: var(--top-padding);
        padding-bottom: var(--bottom-padding);
        transition: background-color 0.2s ease;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    nav > a img {
        width: 42px;
        align-content: flex-end;
    }

    nav ul > li a {
        font-weight: 600;
    }
    ul {
        display: flex;
        gap: 16px;
    }

    ul li {
        list-style: none;
        align-content: flex-end;
    }

    /*Misc designs*/
    .green-tag {
        font-family: "Inter", sans-serif;
        background-color: #065333;
        background: rgb(6, 83, 51);
        background: linear-gradient(
            90deg,
            rgba(6, 83, 51, 1) 0%,
                                    rgba(0, 55, 32, 1) 100%
        );
        color: var(--text-primary-light);
        padding: 5px;
        font-size: 14px;
        font-weight: bold;
        border-radius: var(--soft-radius);
        cursor: default;
    }

    .scrolled {
        background-color: #fff;
        border-bottom: 1px #eee solid;
        box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
        border-radius: 0 0 var(--soft-radius) var(--soft-radius);
    }

    #popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
    border-radius: var(--soft-radius);
    padding: 200px;
    border: 1px #eee solid;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: none;
    }

    .close-popup {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
    }
    .x-close {
        height: 120px;
    }

    nav a.active {
        color: var(--primary-color);
        text-decoration: underline;
        font-weight: bold;
    }

    /*Hero*/
    #hero {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    }

    #hero-header {
    display: flex;
    flex-direction: column;
    gap: var(--small-gap);
    }

    #hero-image {
    order: -1;
    }

    #hero-image img {
    border-radius: var(--soft-radius);
    transform: rotate(1deg);
    filter: grayscale(16%) brightness(90%) contrast(96%);
    box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    height: auto;
    border: 2px #eeeeee solid;
    }

    #hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--header-gap);
    }

    .rich-text-content {
        display: flex;
        flex-direction: column;
        gap: var(--text-gap);
    }

    /*Skills*/
    #skills {
    display: flex;
    flex-direction: column;
    gap: var(--header-gap);
    }

    #skill-list {
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    }

    .skill {
        display: flex;
        gap: var(--small-gap);
        flex-direction: column-reverse;
        justify-content: space-even;
        border: 2px #eee solid;
        padding: 8px;
        border-radius: var(--soft-radius);
        box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-weight: bold;
    }

    .skill-image {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 100px;
        width: 50%;
        margin: 0 auto;
        object-fit: cover;
    }

    /*Emails*/
    #emails {
    display: flex;
    flex-direction: column;
    gap: var(--header-gap);
    }

    #email-list {
    background-color: #f5f5f5;
    border-radius: var(--soft-radius);
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
    gap: var(--small-gap);
    }

    .email-card-meta {
        display: flex;
        flex-direction: column;
        gap: var(--small-gap);
    }

    .email-image {
        background-repeat: no-repeat;
        border: 2px #eee solid;
        background-size: cover;
        height: 350px;
        border-radius: var(--soft-radius);
        filter: grayscale(75%);
        transition: filter 0.2s ease-in-out;
    }

    .email-image:hover {
        filter: grayscale(5%);
        box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
    }

    .email-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: var(--header-gap);
        border: 2px #eee solid;
        padding: 12px;
        border-radius: var(--soft-radius);
        box-shadow: 0px 4px 15px -16px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    /*About*/
    #about-content img {
    float: right;
    margin: 0 0 1em 1em;
    max-width: 60%;
    height: auto;
    border-radius: var(--soft-radius) 24px 32px 90px;
    border: 2px #eee solid;
    }

    #about-content {
    overflow: hidden;
    }

    #footer-sections {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: var(--top-padding);
    padding-bottom: var(--bottom-padding);
    align-self: flex-start;
    }

    .footer-socials {
        display: flex;
        flex-direction: row;
        gap: var(--small-gap);
    }

    .social-icon {
        width: 32px;
        height: 32px;
    }

    .linkedin-icon {
        background-image: url("assets/socials/linkedin.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 38px;
        max-height: auto;
    }

    .github-icon {
        background-image: url("assets/socials/github.svg");
        background-repeat: no-repeat;
        background-size: cover;
        max-height: auto;
        width: 32px;
    }
    /*Laptops*/
    @media (max-width: 1390px) {
        #hero {
        grid-template-columns: 1fr;
        }

        #email-list {
        grid-template-columns: 1fr 1fr;
        }
    }

    /*Tablets*/
    @media (max-width: 768px) {
        main {
            margin-left: 10%;
            margin-right: 10%;
        }

        #about {
        grid-template-columns: 1fr;
        }

        #skill-list {
        grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 598px) {
        #skill-list {
        grid-template-columns: 1fr;
        }

        #email-list {
        grid-template-columns: 1fr;
        }
    }

    /*Mobile*/
    @media (max-width: 480px) {
        main {
            margin-left: 8%;
            margin-right: 8%;
        }
    }
    `;
    document.head.append(style);
}
