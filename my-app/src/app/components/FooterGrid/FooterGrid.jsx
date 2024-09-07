import Footer from "./Footer.jsx";
import GITHUB from "../../assets/githubFooter.svg"
import SOF from "../../assets/stackOverFlow.svg"
import REDDIT from "../../assets/reddit.svg"
import LINKEDIN from "../../assets/linkedIn.svg"

export default function FooterGrid() {
    return (
        <div className="w-[195px] h-[30px] justify-between items-center inline-flex cursor-pointer sm:hidden">
            <Footer symbol={GITHUB} name={"GitHub"} />
            <Footer symbol={SOF} name={"StackOverFlow"} />
            <Footer symbol={REDDIT} name={"Reddit"} />
            <Footer symbol={LINKEDIN} name={"LinkedIn"} />
        </div>
    );
}
