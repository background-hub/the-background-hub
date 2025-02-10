import imgHome from '../assets/img-home.svg'; // Altere o caminho conforme necessário

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgHome})` }}>
      <div className="absolute inset-0 "></div> {/* Filtro escuro */}
      <div className="relative z-10 flex items-center justify-end h-full px-8">
        <div className="text-white max-w-7xl text-right">
          <h2 className=" title-home text-[7rem] font-semibold mb-4">Nos bastidores do seu sucesso</h2>
          <p className="text-2xl mb-6">
            Suporte ao cliente, estamos por trás daquilo que será seu sucesso, suporte, garantindo seu sucesso por meio de suas conexões. Serviço especializado em consultoria, regulação e relacionamento setor privado-público.
          </p>
          <a
            href="#contato" // Este será o link para o final da página
            className=" w-48 h-24 inline-block bg-[#0353a4] text-white link-home text-2xl font-semibold rounded-md shadow-md px-[49px] py-7"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  );
}