import React from "react";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FiCompass } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    fill="white"
                    className="-top-40 left-10 md:-left-32 md:-top-20 h-screen"
                />
                <Spotlight fill="blue" className="top-10 left-full h-[80vh] w-[50vw]" />
                <Spotlight fill="purple" className="top-28 left-80 h-[80vh] w-[50vw]" />
            </div>
            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-sm text-blue-200 text-center">
                        Estudiante de FAMaF
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-start text-black dark:text-white my-3">
                        Portafolio de proyectos unicos de Fran Cecchi con un 
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-rose-500 to-violet-400"> Estilo unico</span>
                    </h1>
                    <p className="text-center text-lg md:text-xl dark:text-blue-100 mb-4">
                        Desarrolador Fullstack en Cordoba, Argentina.
                    </p>
                    <a href="#about">
                        <MagicButton
                         title="Ver mis proyectos"
                         icon={<FiCompass />}
                         position="left"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;