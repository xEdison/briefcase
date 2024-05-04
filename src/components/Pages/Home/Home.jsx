import React, { useState,useEffect  } from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Header } from '../../Layouts/Header/Header';
import { ImgPerfil } from '../../ImgPerfil/ImgPerfil';
import { Name } from '../../Name/Name';
import { Item } from '../../Item/Item';
import NavBar from '../../NavBar/NavBar';
import { LogoSena } from '../../LogoSena/LogoSena';
import { UserInfoSocial } from '../../UserInfoSocial/UserInfoSocial';
import { ItemPages } from '../../ItemPages/ItemPages';
import { Main } from '../../Layouts/Main/Main';
import { TitleSection } from '../../TitleSection/TitleSection';
import { InformationPerfil } from '../../InformationPerfil/InformationPerfil';
import { Content } from '../../Content/Content';
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { ItemExperience } from '../../ItemExperience/ItemExperience';
import mongodb from '../../../assets/mongodb.png';
import java from '../../../assets/java.png';
import JS from '../../../assets/JS.png';
import react from '../../../assets/React.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import './Home.css';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  };
  useEffect(() => {
    const handleResize = () => {
      const shouldBeVisible = window.innerWidth < 768; 
      setIsVisible(shouldBeVisible);
    };

    
    
  }, []);

  return (
    <>
      <Header isVisible={isVisible}>
        <RxCross1 id='exit'onClick={toggleVisibility} />
        <ImgPerfil />
        <Name name='Edison Alzate' />
        <NavBar>
          <Item link='#'  text='Inicio' />
          <Item link='#profile' text='Perfil' />
          <Item link='#proyects' text='Proyectos' />
          <Item link='#references' text='Referencias' />
          <Item link='#expe' text='Experiencia' />
        </NavBar>
        <LogoSena />
        <UserInfoSocial>
          <ItemPages link={'https://www.facebook.com/profile.php?id=100005689005914'} icon={<BsFacebook />} />
          <ItemPages link={'https://www.instagram.com/edison_77x/'} icon={<BsInstagram />} />
          <ItemPages link={'https://api.whatsapp.com/send/?phone=573136434244&text&type=phone_number&app_absent=0'} icon={<BsWhatsapp />} />
        </UserInfoSocial>
      </Header>
      <Main>  
        <RxHamburgerMenu id='menu' onClick={toggleVisibility} />
        <TitleSection id='profile' title='PERFIL' />
        <InformationPerfil info="
Soy un aprendiz del SENA en busca de
oportunidades para aplicar y expandir mis
conocimientos en Analisis y desarrollo, 
mi nombre es Edison Alzate, un joven de 18 años residente en Armenia, Quindío. Poseo 
un sólido Aprendizaje en análisis y desarrollo de software, respaldado por un título técnico
 en la materia y actualmente cursando una tecnología en la misma área. Mi comprensión
  intermedia de lenguajes como Java, JavaScript y Python, combinada con mi pasión por 
  construir nuevos proyectos y resolver problemas cotidianos mediante la tecnología, me
  impulsa a buscar oportunidades para aplicar y expandir mis conocimientos en el
   campo. Además, tengo experiencia en desarrollo con React, Node.js y Express." />
        <TitleSection id='proyects'title='PROYECTOS' />
        <Content>
          <Proyects title="TO DO LIST" description="Una aplicacion que permite al usuario crear una tarea y podra poner que tarea fue realizada y poder archivarlas, utilizando REACT(Funcional, sin responsive solo para laptop)" Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://funny-bonbon-e3f83e.netlify.app'/>
          <Proyects title="Automatizacion" description="Automatizacion que hace ingresar a instagram y buscar x persona para seguirla" Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/xEdison/Bot.git'/>
          <Proyects title="AppTastico" description="Maquetacion de la pagina AppTastico usando HTML y CSS (No funcional, con respondive a cualquier dispositivo)" Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://xedison.github.io/Apptastico/'/>
          <Proyects Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' title="Tailwind" description="Pagina web sencilla en React utilizando Tailwind" url='https://phenomenal-zabaione-f553f4.netlify.app/'/>
        </Content>
        <TitleSection id='references' title='REFERENCIAS' />
        <Content>
          <References name='Nombre: MONICA ARDILA' cargo='Cargo: FAMILIAR' number='Numero:3202200150' email='MONICAARDILAGOMEZ @GMAIL.COM' />
          <References name='Nombre: Miriam Gomez Guarnizo' cargo='FAMILIAR:' number='Numero:3013941067'  />

        </Content>
        <TitleSection id='expe' title='EXPERIENCIA' />
        <Content>
          <ItemExperience image={mongodb} value="30" progress="Intermedio" />
          <ItemExperience image={java} value="50" progress="Intermedio" />
          <ItemExperience image={JS} value="60" progress="Intermedio" />
          <ItemExperience image={react} value="70" progress="BUENO" />
        </Content>
      </Main>
    </>
  )
}
