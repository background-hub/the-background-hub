export default function Footer() {
    return (
        <footer className="bg-[#263238] text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                    <p className="text-lg footer text-[20px]">2024</p>
                    <p className="text-sm footer text-[20px]">Todos os Direitos Reservados</p>
                </div>
                <div className="text-start">
                    <h2 className="text-3xl footer">The Background Hub</h2>
                    <ul className="space-y-2">
                    <li className="footer text-[20px]">Sobre Nós</li>
                    <li className="footer text-[20px]">Serviços</li>
                    </ul>
                </div>
                <div className="flex flex-col flex-nowrap justify-center items-start">
                    <h2 className="text-3xl mb-2 footer">Contato</h2>
                    <div className="messageBox">
                        <input required placeholder="Digite seu e-mail..." type="text" id="messageInput" />
                        <button id="sendButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                                <path
                                fill="none"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                                ></path>
                                <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="33.67"
                                stroke="#6c6c6c"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
  