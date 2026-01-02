import perfil from '../assets/Foto_de_Perfil.jpg'
import { Phone, Mail, PinIcon, BriefcaseBusiness, Brain, FileDown, Terminal, Server, Wifi, Shield } from 'lucide-react';

function CurriculoTech() {

  const handlePrint = () => {
    window.print();
  };

  return (
   <div className="flex flex-col md:grid md:grid-cols-[30%_70%] min-h-screen font-sans">
    {/* Barra azul a esquerda */}
    <div className="bg-slate-900 gap-8 flex flex-col items-center md:items-start py-10 px-6 w-full md:h-full text-slate-300 relative overflow-hidden">
        
    {/* Foto de Perfil */}
    <div className="flex flex-col items-center z-10">
      <div className="relative">
          <img 
          src={perfil} 
          alt="Foto de perfil"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-700 object-cover object-top shadow-xl"
          />
          <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900" title="Online / Disponível"></div>
      </div>
       {/* Nome Completo (Mobile Only) */}
       <h1 className='font-bold text-white text-xl mt-4 text-center md:hidden tracking-wider'>
        SAMUEL GOMES TEIXEIRA
      </h1>
      <span className="md:hidden text-cyan-400 text-sm font-mono mt-1">&lt;Analista de Redes /&gt;</span>
    </div>

      {/* Sobre Mim     */}
    <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left z-10 w-full'>
      <h1 className='font-bold text-xl text-white flex items-center gap-2 border-b-2 border-cyan-500 pb-1 w-full justify-center md:justify-start'>
        <Terminal className="w-5 h-5 text-cyan-400" />
        SOBRE MIM
      </h1>

      <p className='font-light text-slate-300 text-sm leading-relaxed'>
        Profissional de TI focado em <span className="text-cyan-400 font-medium">redes e infraestrutura</span>. Especialista em MikroTik, conectividade e resolução de problemas complexos. Busco constantemente otimizar performance e segurança.
      </p>
    </div>

    
    {/* Contatos */}

    <div className=' flex flex-col gap-4 text-white items-center md:items-start w-full z-10'>
      <h1 className='font-bold text-xl flex items-center gap-2 border-b-2 border-cyan-500 pb-1 w-full justify-center md:justify-start'>
        CONTATOS
      </h1>

        {/* Telefone */}
      <a href="tel:+5531981142120" className='flex gap-3 text-sm items-center hover:text-cyan-400 transition-colors group'> 
        <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
            <Phone className='w-4 text-cyan-400'/>
        </span>
      (31) 98114-2120
      </a>
          {/* E-Mail */}
      <a href="mailto:samuelginformatica@gmail.com" className='flex gap-3 text-sm items-center hover:text-cyan-400 transition-colors group'> 
        <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
            <Mail className='w-4 text-cyan-400'/>
        </span>
      samuelginformatica@gmail.com
      </a>

                {/* Endereço */}
      <a href="https://maps.google.com/?q=Rua+Paulo+Kruger+Mourão,+230+-+Bloco+05+Ap+303" target="_blank" rel="noopener noreferrer" className='flex gap-3 text-sm items-start text-left hover:text-cyan-400 transition-colors group'> 
        <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors mt-0.5">
            <PinIcon className='w-4 h-4 shrink-0 text-cyan-400'/>
        </span>
      Rua Paulo Kruger Mourão, 230 - Bloco 05 Ap 303
      </a>

    </div>

   
    {/* Habilidades */}

    <div className=' flex flex-col gap-4 text-white items-center md:items-start text-center md:text-left w-full z-10'>
      <h1 className='font-bold text-xl flex items-center gap-2 border-b-2 border-cyan-500 pb-1 w-full justify-center md:justify-start'>
        HABILIDADES
      </h1>

      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">MikroTik</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">Routing</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">Firewall</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">QoS</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">TCP/IP</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">VPN (L2TP/Wireguard)</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">Zabbix</span>
          <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full border border-slate-700 font-mono">The Dude</span>
      </div>

    </div>


    <button 
      onClick={handlePrint}
      className="mt-8 flex items-center gap-2 bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-500 transition-colors print:hidden cursor-pointer shadow-lg z-10"
    >
      <FileDown className="w-5 h-5" />
      Baixar em PDF
    </button>


    </div>
     <div className="flex p-6 md:p-12 flex-col items-start w-full bg-slate-50 text-slate-800">

      {/* Nome Completo (Desktop Only) */}
      <div className="hidden md:flex flex-col items-start mb-2">
        <h1 className='font-bold text-slate-900 text-4xl tracking-tight'>
            SAMUEL GOMES TEIXEIRA
        </h1>
        <h2 className="text-cyan-600 text-xl font-mono mt-1 bg-cyan-50 px-2 py-1 rounded inline-block">
            &lt;Analista de Redes /&gt;
        </h2>
      </div>

    {/* EXPERIENCIA PROFISSIONAL */}
      <div className=' my-8 flex flex-col items-start gap-8 w-full relative'>
        
        {/* Linha do tempo (Vertical Line) */}
        <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

        <h1 className='font-bold text-2xl items-center text-slate-800 flex gap-4 uppercase tracking-wider border-b w-full pb-2'>
         <span className='bg-slate-900 rounded-lg p-2 shadow-lg'>
          <Server className='text-cyan-400 w-6 h-6'/>
         </span> 
          EXPERIÊNCIA PROFISSIONAL
        </h1>


        {/* EXPERIENCIA 1 */}
      <div className="flex flex-col gap-2 relative pl-0 md:pl-8">
         {/* Dot na linha do tempo */}
         <div className="absolute left-[15px] top-2 w-3 h-3 bg-cyan-500 rounded-full border-2 border-white hidden md:block z-10"></div>
         
        <h1 className="text-lg font-semibold text-slate-700">
             <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded mr-2 font-mono">Atual</span>
             <span className="text-slate-900">Analista de Redes </span> 
             <span className="text-slate-400 text-sm">| HFS Informática</span>
        </h1>

        <div className="text-sm leading-relaxed text-slate-600 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
          <ul className="list-disc ml-4 space-y-1 marker:text-cyan-500">
            <li>Configuração, administração e monitoramento de redes cabeadas e wireless;</li>
            <li>Gerenciamento avançado de roteadores <strong>MikroTik</strong>;</li>
            <li>Administração de CFTV (HikCentral, Digifort, Hikvision);</li>
            <li>Integração de sistemas com <strong>Active Directory (AD)</strong>;</li>
            <li>Suporte N2/N3, diagnóstico e troubleshooting de incidentes.</li>
          </ul>
        </div>
      </div>

      
      {/* EXPERIÊNCIA 2 */}
      <div className="flex flex-col gap-2 relative pl-0 md:pl-8">
        <div className="absolute left-[15px] top-2 w-3 h-3 bg-slate-400 rounded-full border-2 border-white hidden md:block z-10"></div>
        <h1 className="text-lg font-semibold text-slate-700">
          <span className="text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded mr-2 font-mono">2021-2024</span>
          <span className="text-slate-900">Técnico de Redes e Infraestrutura</span>
          <span className="text-slate-400 text-sm">| Alvo Segurança LTDA</span>
        </h1>

        <div className="text-sm leading-relaxed text-slate-600 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <ul className="list-disc ml-4 space-y-1 marker:text-slate-400">
                <li>Implementação e manutenção de infraestrutura de redes;</li>
                <li>Configuração de equipamentos MikroTik e switches;</li>
                <li>Suporte técnico a usuários e atendimento a chamados;</li>
                <li>Operação de sistemas de segurança eletrônica e CFTV;</li>
                <li>Apoio na administração de usuários em Active Directory.</li>
            </ul>
        </div>
      </div>

      {/* EXPERIÊNCIA 3 */}
      <div className="flex flex-col gap-2 relative pl-0 md:pl-8">
        <div className="absolute left-[15px] top-2 w-3 h-3 bg-slate-400 rounded-full border-2 border-white hidden md:block z-10"></div>
        <h1 className="text-lg font-semibold text-slate-700">
          <span className="text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded mr-2 font-mono">2018-2021</span>
          <span className="text-slate-900">Técnico de TI</span>
          <span className="text-slate-400 text-sm">| Autônomo</span>
        </h1>

        <div className="text-sm leading-relaxed text-slate-600 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
             <ul className="list-disc ml-4 space-y-1 marker:text-slate-400">
                <li>Suporte técnico em hardware e software para clientes finais;</li>
                <li>Manutenção preventiva e corretiva de computadores;</li>
                <li>Instalação e configuração de redes domésticas e SOHO;</li>
                <li>Atendimento técnico presencial e remoto.</li>
             </ul>
        </div>
      </div>


   



      </div>

       <div className='my-8 flex flex-col items-start gap-6 w-full'>

        <h1 className='font-bold text-2xl items-center text-slate-800 flex gap-4 uppercase tracking-wider border-b w-full pb-2'>
         <span className='bg-slate-900 rounded-lg p-2 shadow-lg'>
          <Brain className='text-cyan-400 w-6 h-6'/>
         </span> 
          FORMAÇÃO E APRENDIZADO
        </h1>

        <div className="bg-slate-900 text-slate-300 p-6 rounded-xl w-full shadow-lg relative overflow-hidden">
             {/* Decorativo */}
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Wifi className="w-24 h-24" />
             </div>

            <p className="text-sm leading-relaxed mb-6 font-light italic border-l-4 border-cyan-500 pl-4">
            "Aprendizado contínuo em Tecnologia da Informação, com imersão em redes, infraestrutura e segurança. Evolução constante através de prática profissional e laboratórios (Homelab)."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-white flex items-center gap-2">
                        <Shield className="w-4 h-4 text-cyan-400"/>
                        Principais Conhecimentos
                    </h2>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Redes TCP/IP, DHCP, DNS</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Roteamento Estático e Dinâmico (OSPF)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>VPNs (Configuração e Tunnels)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Firewall Rules & Security</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Failover & Load Balancing</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-white flex items-center gap-2">
                        <BriefcaseBusiness className="w-4 h-4 text-cyan-400"/>
                        Cursos & Complementares
                    </h2>
                    <ul className="text-sm space-y-2">
                        <li className="bg-slate-800 p-2 rounded border border-slate-700">
                            <span className="text-cyan-300 font-bold block text-xs mb-1">MIKROTIK</span>
                            Curso livre (Hackone): VPN, Firewall, Routing, OSPF, Failover.
                        </li>
                        <li className="bg-slate-800 p-2 rounded border border-slate-700">
                            <span className="text-cyan-300 font-bold block text-xs mb-1">AUTODIDATA</span>
                            Leitura técnica, documentação oficial e laboratórios práticos.
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>



     </div>
   </div>
  )
}

export default CurriculoTech
