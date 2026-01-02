import perfil from './assets/Foto_de_Perfil.jpg'
import { Phone, Mail, PinIcon, BriefcaseBusiness, Brain, FileDown } from 'lucide-react';

function App() {

  const handlePrint = () => {
    window.print();
  };

  return (
   <div className="flex flex-col md:grid md:grid-cols-[30%_70%] min-h-screen">
    {/* Barra azul a esquerda */}
    <div className="bg-primary-blue gap-8 flex flex-col items-center md:items-start py-10 px-6 w-full md:h-full">

    {/* Foto de Perfil */}
    <div className="flex flex-col items-center">
      <img 
      src={perfil} 
      alt="Foto de perfil"
      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white object-cover"
      />
       {/* Nome Completo (Mobile Only) */}
       <h1 className='font-bold text-white text-xl mt-4 text-center md:hidden'>
        SAMUEL GOMES TEIXEIRA
      </h1>
    </div>

      {/* Sobre Mim     */}
    <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
      <h1 className='font-bold text-2xl text-white'>
        SOBRE MIM
      </h1>

      <p className='font-light text-white '>
        Profissional de TI com foco em redes e infraestrutura, experiência com MikroTik, redes cabeadas e wireless,
        suporte técnico e resolução de incidentes. Perfil proativo, organizado e em constante evolução técnica.
      </p>
    </div>

    
    {/* Contatos */}

    <div className=' flex flex-col gap-2 text-white items-center md:items-start'>
      <h1 className='font-bold text-2xl   '>
        CONTATOS
      </h1>

        {/* Telefone */}
      <a href="tel:+5531981142120" className='flex gap-2.5 text-sm items-center hover:underline'> 
        <Phone
        className='w-4'
        />        
      (31) 98114-2120
      </a>
          {/* E-Mail */}
      <a href="mailto:samuelginformatica@gmail.com" className='flex gap-2.5 text-sm items-center hover:underline'> 
        <Mail
        className='w-4'
        />        
      samuelginformatica@gmail.com
      </a>

                {/* Endereço */}
      <a href="https://maps.google.com/?q=Rua+paulo+Kruger+Mourão,+230+-+Bloco+05+Ap+303" target="_blank" rel="noopener noreferrer" className='flex gap-2.5 text-sm items-start text-left hover:underline'> 
        <PinIcon
        className='w-4 h-4 shrink-0 mt-0.5'
        />        
      Rua paulo Kruger Mourão, 230 - Bloco 05 Ap 303
      </a>

    </div>

   
    {/* Habilidades */}

    <div className=' flex flex-col gap-2 text-white items-center md:items-start text-center md:text-left'>
      <h1 className='font-bold text-2xl   '>
        Habilidades
      </h1>

      <p className='font-light '>
      Mikrotik (Routing, Firewall, QoS)
      </p>

       <p className='font-light '>
      Redes TCP/IP
      </p>

       <p className='font-light '>
     VPN (L2TP, Wireguard)
      </p>

       <p className='font-light '>
      Firewall
      </p>

     <p className='font-light '>
      Monitoramento (Zabbix, The Dude)
      </p>

    </div>


    <button 
      onClick={handlePrint}
      className="mt-8 flex items-center gap-2 bg-white text-primary-blue font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors print:hidden cursor-pointer"
    >
      <FileDown className="w-5 h-5" />
      Baixar em PDF
    </button>


    </div>
     <div className="flex p-6 md:p-10 flex-col items-start w-full">

      {/* Nome Completo (Desktop Only) */}
      <h1 className='hidden md:block font-bold text-primary-blue text-2xl self-center md:self-start text-center md:text-left'>
        SAMUEL GOMES TEIXEIRA
      </h1>

    {/* EXPERIENCIA PROFISSIONAL */}
      <div className=' my-8 flex flex-col items-start gap-4 w-full'>

        <h1 className='font-bold items-center  text-primary-blue flex gap-4 '>
         <span className='bg-primary-blue rounded-full p-1.5'>
          <BriefcaseBusiness className='text-white'/>
         </span> 
          EXPERIÊNCIA PROFISSIONAL
        </h1>


        {/* EXPERIENCIA 1 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-base">
             Atual - <span className="font-bold text-primary-blue">Analista de Redes </span> | HFS Informática
        </h1>

        <p className="ml-0 md:ml-10 text-sm leading-relaxed">
          Configuração, administração e monitoramento de redes cabeadas e wireless;
          gerenciamento de roteadores MikroTik;
          administração e monitoramento de CFTV (HikCentral, Digifort, Hikvision);
          integração com Active Directory (AD);
          suporte técnico, diagnóstico e resolução de incidentes.

        </p>
      </div>

      
      {/* EXPERIÊNCIA 2 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-base">
          2021 a 2024 – <span className="font-bold text-primary-blue">Técnico de Redes e Infraestrutura</span> | Alvo Segurança LTDA
        </h1>

        <p className="ml-0 md:ml-10 text-sm leading-relaxed">
        Implementação e manutenção de redes cabeadas e wireless;
        configuração de equipamentos MikroTik;
        suporte técnico a usuários e atendimento a incidentes;
        operação de sistemas de CFTV (HikCentral, Digifort, Hikvision);
        apoio na integração com Active Directory (AD).

        </p>
      </div>

      {/* EXPERIÊNCIA 3 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-base">
          2018 a 2021 – <span className="font-bold text-primary-blue">Técnico de TI (Autônomo) </span> 
        </h1>

        <p className="ml-0 md:ml-10 text-sm leading-relaxed">
        Prestação de serviços de suporte técnico em informática básica;
        manutenção de computadores, formatação e instalação de sistemas;
        configuração de redes cabeadas e wireless de pequeno porte;
        atendimento técnico presencial e remoto a clientes.
        </p>
      </div>


   



      </div>

       <div className='my-8 flex flex-col items-start gap-4'>

        <h1 className='font-bold items-center  text-primary-blue flex gap-4 '>
         <span className='bg-primary-blue rounded-full p-1.5'>
          <Brain className='text-white'/>
         </span> 
          FORMAÇÃO E APRENDIZADO
        </h1>

        <p className="text-sm leading-relaxed">
          Aprendizado técnico em Tecnologia da Informação, com foco em redes e infraestrutura, adquirido por meio de cursos livres, 
          leitura de livros técnicos, estudos autodidatas e experiência prática em campo.
        </p>

        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-primary-blue">Principais conhecimentos:</h2>
            <ul className="ml-5 list-disc text-sm space-y-1">
                <li>Redes de computadores (TCP/IP, DHCP, DNS);</li>
                <li>Configuração de redes cabeadas e wireless;</li>
                <li>
                    Administração de roteadores MikroTik, incluindo:
                    <ul className="ml-5 list-[circle] mt-1 space-y-1">
                        <li>Configuração de VPN;</li>
                        <li>Regras de Firewall;</li>
                        <li>Roteamento estático e dinâmico;</li>
                        <li>OSPF;</li>
                        <li>Failover e balanceamento de links;</li>
                    </ul>
                </li>
                <li>Fundamentos de CFTV (Hikvision, HikCentral, Digifort);</li>
                <li>Suporte técnico e resolução de problemas.</li>
            </ul>
        </div>

        <div className="flex flex-col gap-2">
             <h2 className="font-bold text-primary-blue">Cursos e estudos complementares:</h2>
             <ul className="ml-5 list-disc text-sm space-y-1">
                <li>Participação em curso livre de MikroTik (Hackone), com foco em VPN, firewall, roteamento, OSPF e failover;</li>
                <li>Estudo contínuo por meio de livros técnicos e prática profissional.</li>
             </ul>
        </div>

    </div>



     </div>
   </div>
  )
}

export default App
