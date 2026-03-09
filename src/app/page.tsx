"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Instagram, MessageCircle, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Studio Beauty Boss"
          navItems={[
            { name: "Serviços", id: "services" },
            { name: "Avaliações", id: "testimonials" },
            { name: "Contacto", id: "contact" },
            { name: "Marcar", id: "booking" },
          ]}
          button={{
            text: "Ligar — 910 953 950",            href: "tel:910953950"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="STUDIO BEAUTY BOSS"
          description="O seu salão de beleza completo no Porto — cabelo, unhas, cílios e muito mais num ambiente acolhedor com resultados impecáveis"
          buttons={[
            {
              text: "Ligar Agora — 910 953 950",              href: "tel:910953950"
            },
            {
              text: "Marcar Serviço Online",              href: "#booking"
            },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/waiting-room-with-chairs-blurred_1203-1402.jpg",              imageAlt: "Interior elegante do salão de beleza"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-vanity-case-with-products_23-2149879978.jpg",              imageAlt: "Área de tratamento profissional"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-girl-sport-outfits-posing-confidently_114579-21727.jpg",              imageAlt: "Equipa acolhedora e profissional"
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content: "5★ em 65 avaliações verificadas"
            },
            {
              type: "text",              content: " — A confiança das nossas clientes é a nossa melhor recomendação"
            },
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Ver Avaliações",              href: "#testimonials"
            },
            {
              text: "Marcar Agora",              href: "#booking"
            },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Os Nossos Serviços"
          description="Todos os serviços de beleza que precisa num só lugar — com equipa experiente, certificada e sempre atenta aos detalhes"
          tag="Serviços Completos"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          features={[
            {
              title: "Cabelo",              description: "Escova, corte, coloração e tratamentos profissionais com produtos de qualidade premium",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-hair-salon_23-2150668429.jpg",              imageAlt: "Serviço profissional de cabelo",              button: {
                text: "Marcar Corte",                href: "#booking"
              },
            },
            {
              title: "Unhas",              description: "Manicura e pedicura com design personalizado, gel duradouro e acabamento impecável",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-getting-her-nails-fixed-by-manicurist-inside-room-beauty-manicure-nails-hand-self-care_140725-65113.jpg",              imageAlt: "Serviço de unhas profissional",              button: {
                text: "Marcar Unhas",                href: "#booking"
              },
            },
            {
              title: "Cílios",              description: "Extensões de pestanas, lifting e tint para um olhar arrebatador e duradouro",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-bride-getting-ready-wedding_23-2149860802.jpg",              imageAlt: "Serviço de pestanas profissional",              button: {
                text: "Marcar Pestanas",                href: "#booking"
              },
            },
            {
              title: "Tratamentos Faciais",              description: "Limpeza profunda, rejuvenescimento e cuidados especializados para a pele",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-getting-massaged-spa_23-2149871238.jpg",              imageAlt: "Serviço de tratamento facial",              button: {
                text: "Marcar Facial",                href: "#booking"
              },
            },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Porquê Escolher-nos"
          description="Mais que um salão, um refúgio de confiança onde cada serviço é uma experiência"
          showStepNumbers={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "5 Estrelas Verificadas",              description: "65 avaliações de clientes satisfeitas no Google — a qualidade e acolhimento falam por si",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/young-lady-showing-thumbs-up-shirt-cardigan-looking-joyful-front-view_176474-110768.jpg"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg"
              },
            },
            {
              id: 2,
              title: "Ambiente Acolhedor",              description: "Equipa profissional e simpática que o trata como amiga — especialista em beleza e em fazer o seu dia",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/waiting-room-with-chairs-blurred_1203-1402.jpg"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/high-angle-vanity-case-with-products_23-2149879978.jpg"
              },
            },
            {
              id: 3,
              title: "Serviços Completos",              description: "Cabelo, unhas, cílios, tratamentos faciais — tudo o que precisa numa única visita, num único lugar",              phoneOne: {
                imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-hair-salon_23-2150668429.jpg"
              },
              phoneTwo: {
                imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-getting-her-nails-fixed-by-manicurist-inside-room-beauty-manicure-nails-hand-self-care_140725-65113.jpg"
              },
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="O Que Dizem as Nossas Clientes"
          description="Mais de 65 avaliações verificadas — conheça a experiência real de quem confia em nós"
          tag="Avaliações Google 5★"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Eliuza S., Cliente Verificada",              date: "Date: 15 Dezembro 2024",              tag: "Resultado Impecável",              title: "Apaixonada pelo resultado! Trabalho impecável... Perfeição define!",              quote: "Voltei e pedi o mesmo. Adorei! A rapariga que me fez o cabelo é muito simpática, dedicada e atenciosa aos detalhes. Voltarei com certeza. Recomendo!",              avatarSrc: "http://img.b2bpic.net/free-photo/young-lady-showing-thumbs-up-shirt-cardigan-looking-joyful-front-view_176474-110768.jpg",              avatarAlt: "Eliuza S.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-hair-salon_23-2150668429.jpg"
            },
            {
              id: "2",              name: "Monica B., Cliente Verificada",              date: "Date: 12 Dezembro 2024",              tag: "Serviço Completo",              title: "As meninas são MARAVILHOSAS! Sai de lá tudo pronto para arrasar",              quote: "Entrei para fazer um simples corte e saí com muito mais! As raparigas foram sempre atenciosas, fizeram perguntas sobre o que eu realmente queria e o resultado foi perfeição.",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg",              avatarAlt: "Monica B.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-hair-salon_23-2150668429.jpg"
            },
            {
              id: "3",              name: "Adriana O., Cliente Verificada",              date: "Date: 8 Dezembro 2024",              tag: "Profissionalismo Total",              title: "O MELHOR! Profissionalismo, acolhimento e simpatia... Perfeição!",              quote: "Procurava um lugar de confiança perto de casa e encontrei! Voltei várias vezes. O ambiente é acolhedor, as raparigas são profissionais e muito simpáticas. Sinceramente perfeito!",              avatarSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",              avatarAlt: "Adriana O.",              imageSrc: "http://img.b2bpic.net/free-photo/waiting-room-with-chairs-blurred_1203-1402.jpg"
            },
            {
              id: "4",              name: "Joana P., Cliente Verificada",              date: "Date: 5 Dezembro 2024",              tag: "Qualidade Premium",              title: "Finalmente encontrei o meu salão! Qualidade e confiança",              quote: "Depois de experimentar vários salões, encontrei aqui o que procurava. Profissionalismo, qualidade e um ambiente que se sente como estar com amigas. Recomendo muito!",              avatarSrc: "http://img.b2bpic.net/free-photo/pretty-middle-aged-lady-tilting-head-leaning-index-finger-cute-tender-gazing-charmed-camera_176420-43901.jpg",              avatarAlt: "Joana P.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-getting-her-nails-fixed-by-manicurist-inside-room-beauty-manicure-nails-hand-self-care_140725-65113.jpg"
            },
            {
              id: "5",              name: "Rita M., Cliente Verificada",              date: "Date: 2 Dezembro 2024",              tag: "Experiência Completa",              title: "Excelente atendimento e resultados fantásticos!",              quote: "As raparigas são muito profissionais e atenciosas. Cada detalhe é cuidado com atenção. Deixo o meu cabelo e unhas sempre nos melhores cuidados. Top!",              avatarSrc: "http://img.b2bpic.net/free-photo/mature-woman-smiling_1149-601.jpg",              avatarAlt: "Rita M.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-bride-getting-ready-wedding_23-2149860802.jpg"
            },
            {
              id: "6",              name: "Carla T., Cliente Verificada",              date: "Date: 28 Novembro 2024",              tag: "Ambiente Acolhedor",              title: "Um lugar onde se sente em casa! Muito simpáticas e dedicadas",              quote: "Chegava-me tensa e saía completamente relaxada. O ambiente, o atendimento, tudo é pensado para a sua comodidade. Voltei e vou voltar sempre!",              avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-thankful-young-woman-honored-embarrassed_1262-14837.jpg",              avatarAlt: "Carla T.",              imageSrc: "http://img.b2bpic.net/free-photo/waiting-room-with-chairs-blurred_1203-1402.jpg"
            },
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactSplitForm
          title="Marcar Serviço Online"
          description="Preencha o formulário com os seus dados e preferências. Entraremos em contacto em menos de 2 horas para confirmar a sua marcação"
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Nome Completo",              required: true,
            },
            {
              name: "phone",              type: "tel",              placeholder: "Telemóvel (+351 9...)",              required: true,
            },
            {
              name: "service",              type: "text",              placeholder: "Serviço de Interesse",              required: true,
            },
            {
              name: "date",              type: "date",              placeholder: "Data Preferida",              required: true,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Deixe-nos a saber mais sobre o que deseja (opcional)",            rows: 4,
            required: false,
          }}
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Enviar Pedido de Marcação"
          imageSrc="http://img.b2bpic.net/free-photo/waiting-room-with-chairs-blurred_1203-1402.jpg"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Studio Beauty Boss"
          copyrightText="© 2025 Studio Beauty Boss Porto — R. da Constituição 668, 4200-194 Porto · Tel: 910 953 950"
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/studiobeautyboss",              ariaLabel: "Instagram"
            },
            {
              icon: MessageCircle,
              href: "https://wa.me/351910953950",              ariaLabel: "WhatsApp"
            },
            {
              icon: Phone,
              href: "tel:910953950",              ariaLabel: "Ligar"
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
