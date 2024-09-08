import ToolCard from './ToolCard';
import NEXT from "../../assets/nextjs.svg"
import REACT from "../../assets/react.svg"
import TAILWIND from "../../assets/tailwind.svg"
import GITHUB from "../../assets/github.svg"
import GIT from "../../assets/git.svg"
import VSCODE from "../../assets/vscode.svg"
import NODE from "../../assets/nodejs.svg"
import LINUX from "../../assets/linux.svg"
import SPRING from "../../assets/springboot.svg"

export default function DivToolCards() {
    return (
        <div className="grid grid-cols-3 gap-8 p-4">
            <ToolCard
                image={NEXT}
                imageDescription="Next.js"
                title="Next.js"
                description="Framework React com renderização."
            />
            <ToolCard
                image={REACT}
                imageDescription="React"
                title="React"
                description="Biblioteca JavaScript para interfaces interativas."
            />
            <ToolCard
                image={TAILWIND}
                imageDescription="Tailwind CSS"
                title="Tailwind CSS"
                description="Framework CSS utilitário para estilização rápida."
            />
            <ToolCard
                image={GITHUB}
                imageDescription="GitHub"
                title="GitHub"
                description="Plataforma para versionamento e colaboração."
            />
            <ToolCard
                image={GIT}
                imageDescription="Git"
                title="Git"
                description="Sistema de controle de versão distribuído."
            />
            <ToolCard
                image={VSCODE}
                imageDescription="VS Code"
                title="VSCode"
                description="Editor de código leve e extensível."
            />
            <ToolCard
                image={NODE}
                imageDescription="Node.js"
                title="Node.js"
                description="Ambiente JavaScript backend fora do navegador."
            />
            <ToolCard
                image={LINUX}
                imageDescription="Linux"
                title="Linux"
                description="Sistema operacional open-source baseado em UNIX."
            />
            <ToolCard
                image={SPRING}
                imageDescription="Spring Boot"
                title="Spring Boot"
                description="Framework Java para aplicações web."
            />
        </div>
    );
} 
