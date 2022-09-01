<script setup>
import CustomButton from "../components/CustomButton.vue";

const coreTechnologies = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "Vue.js" },
  { name: "Nuxt" },
  { name: "GraphQL" },
  { name: "SASS" },
  { name: "Tailwind" },
  { name: "Google Search" },
];
const otherTechnologies = [{ name: "Adobe Photoshop" }, { name: "Adobe Illustrator" }, { name: "Figma" }, { name: "Microsoft Excel" }];
const languages = [{ name: "English" }, { name: "Romanian" }, { name: "Italian" }];

const role = "IT Administrator";
const aboutMe = [
  {
    headline1: "I am a 16 year old full stack web developer specialling in providing hardware for other developers and my own projects. I run my own hosting company Battlestar Hosting.",
    headline2: "Tech stack: HTML(5), Css(3), Sass, Javascript, Vue.js",
    headline3:
      "I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques is important to me and the success of any organization.",
  },
];
const experienceDescription = "Below can be found my work experience and the skills that I gained along the way";
</script>

<template>
  <div class="wrapper" ref="document">
    <!-- Instagram icon and download btn container -->
    <div class="navbar">
      <!-- Instagram icon -->
      <a href="https://instagram.com/matter_darker" target="_blank" class="instagram-link"><i class="fa-brands fa-instagram fa-xl"></i></a>

      <!-- Download btn -->
      <a href="../../public/files/dimitri-shepherd-resume.pdf" target="_blank"><CustomButton text="Download" /></a>
    </div>
    <!-- Resume container -->
    <div class="resume-container">
      <!-- Side container -->
      <aside class="side-container">
        <div class="side-info-container">
          <router-link class="portfolio-link-container" to="/">
            <p class="portfolio-link">dimitrishepherd.com</p>
            <span class="portfolio-link-underline"></span>
          </router-link>

          <p class="location">Reno, NV</p>
          <p class="phone-number">+1 775 232 4378</p>

          <router-link class="mail-link-container" to="/contact">
            <p class="mail-link">dimitri@dimitrishepherd.com</p>
            <span class="mail-link-underline"></span>
          </router-link>
        </div>

        <div class="core-tech-container">
          <h2 class="core-tech-title">Core Technologies:</h2>
          <ul class="core-skills-list" v-for="technologies in coreTechnologies" :key="technologies.name">
            <li>{{ technologies.name }}</li>
          </ul>
        </div>
        <div class="other-tech-container">
          <h2 class="other-tech-title">Others Technologies:</h2>
          <ul class="other-tech-list" v-for="technologies in otherTechnologies" :key="technologies.name">
            <li>{{ technologies.name }}</li>
          </ul>
        </div>
      </aside>
      <div class="main-container">
        <div class="name-container">
          <h2 class="first-name">Dimitri</h2>
          <h2 class="last-name">Shepherd</h2>
        </div>
        <div class="role-title-container">
          <p>{{ role }}</p>
        </div>

        <div class="description-container">
          <div class="about-me-container" v-for="about in aboutMe" :key="about">
            <p class="headline">{{ about.headline1 }}</p>
            <p class="headline">{{ about.headline2 }}</p>
            <p class="headline">{{ about.headline3 }}</p>
          </div>
        </div>

        <div class="divider"></div>
        <div class="work-experience-container">
          <div class="experience-title-container">
            <h2 class="experience-title">Experience</h2>
            <span class="experience-title-underline"></span>
            <p class="experience-title-description">{{ experienceDescription }}</p>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Synux Technologies</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">IT Administrator</h2>
              </div>
              <p class="work-experience-date">May 2019 - Present</p>
            </div>
            <div class="work-experience-description">
              I worked as a support tech for everything from printers to servers at datacenters, Providing on time and reliable tech support whenever and wherever needed.
              <ul class="work-experience-tasks-list">
                <li>Maintined, upgraded, and installed modern hardware.</li>
                <li>Implemented an auth system so each agent could access their own files.</li>
                <li>Build a backup application to aws cold storage.</li>
                <li>Built easy to use documentation websites for customers.</li>
              </ul>
            </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Battlestar Hosting</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">CEO - CTO</h2>
              </div>
              <p class="work-experience-date">July 2020 - Present</p>
            </div>
            <div class="work-experience-description">
              Battlestar Hosting is my own hosting company. I provide specialised hosting for applications, game servers, vpns, and so much more.
            </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Darker Links</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">CEO</h2>
              </div>
              <p class="work-experience-date">July 2022 - Present</p>
            </div>
            <div class="work-experience-description">Link shortener, QR code maker, Biolink page, All in one. It was desgined with the students of my school in mind.</div>
          </div>

        </div>
        <div class="projects-link-container">
          <div class="projects-link-title-container">
            <h2>Projects</h2>
            <span class="projects-link-title-underline"></span>
          </div>
          <div class="projects-link-description-container">
            <p class="projects-link-description">Links to some of my work can be found on:</p>

            <router-link class="projects-link-container" to="/projects">
              <p class="projects-link">dimitrishepherd.com/projects</p>
              <span class="projects-link-underline"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

/* Colors */
$orange: #f97316;
$black: #000;
$white: #fff;
$light-grey: #808288;
$dark-grey: #474747;
$slate: #cbd5e134;
$light-blue: #0077b5;

/* Download btn transition */
@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65, 0, 0.076, 1)) {
  transition: $property $duration $ease;
}

/* Underline mixin */
@mixin underline($color: $orange) {
  height: 28px;
  position: absolute;
  border-bottom: 7px solid $color;
  margin-top: -4px;
  opacity: 0.4;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    margin-top: 4px;
    cursor: pointer;
  }
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $slate;
  overflow: auto;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 4rem;

    /*icon styling */
    i {
      font-size: 2rem;
      transition: all 0.3s ease;
      color: $black;

      &:hover {
        color: $orange;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 1rem;
      padding-top: 2rem;
    }
  }

  .resume-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 3rem;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
    .side-container {
      padding: 2rem;
      height: 100vh;
      width: 390px;
      position: relative;

      @media screen and (max-width: 768px) {
        display: none;
      }

      .side-info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .location,
        .phone-number {
          font-size: 1.1rem;
          color: $black;
          margin-bottom: 0.3rem;
          margin-top: 0.3rem;
          font-style: italic;
        }

        .portfolio-link-container,
        .mail-link-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;

          .portfolio-link,
          .mail-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .portfolio-link-underline {
            width: 150px;
            @include underline;
          }

          .mail-link-underline {
            width: 210px;
            @include underline;
          }
        }
      }
    }

    .core-tech-container,
    .other-tech-container,
    .languages-container {
      margin-top: 2rem;
      height: auto;
    }
  }

  .main-container {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    .name-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      margin-top: 1rem;
      color: $black;

      .last-name {
        margin-left: 1rem;
      }

      h2 {
        font-size: 5rem;
        font-weight: bold;
        color: $black;

        @media screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }
    }

    .role-title-container {
      margin-top: -2rem;
      width: 100%;

      p {
        font-size: 2rem;
        font-weight: 500;
        color: $dark-grey;
      }
    }

    .description-container {
      margin-top: 1rem;
      width: 100%;

      .about-me-container {
        .headline {
          font-size: 1.2rem;
          font-weight: 400;
          color: $light-grey;
          margin-bottom: 1rem;
        }
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: $light-grey;
      margin-top: 2rem;
      margin-bottom: 2rem;
      opacity: 0.4;
    }

    .work-experience-container {
      width: 100%;
      padding-bottom: 1rem;

      .experience-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .experience-title-underline {
          width: 173px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }

        .experience-title-description {
          font-size: 1.2rem;
          color: $light-grey;
        }
      }

      .work-experience-block {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;

        .work-experience-header-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          margin-top: 1rem;
          color: $black;

          @media screen and (max-width: 768px) {
            flex-direction: column;
          }

          .work-experience-title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            margin-top: 1rem;
            color: $black;
            text-align: center;

            @media screen and (max-width: 768px) {
              flex-direction: column;
            }

            .work-experience-divider {
              width: 20px;
              height: 4px;
              background-color: $light-grey;
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
              border-radius: 5px;
              opacity: 0.4;
            }

            .work-experience-subtitle {
              color: $dark-grey;
              font-weight: 400;
            }
          }

          .work-experience-date {
            color: $dark-grey;
            font-weight: 400;

            @media screen and (max-width: 768px) {
              margin-bottom: 1rem;
            }
          }
        }

        .work-experience-description {
          font-size: 1.2rem;
          color: $light-grey;
          margin-top: -1rem;

          .work-experience-tasks-list {
            margin-top: 1rem;
            font-size: 1.1rem;
          }
        }
      }
    }

    .projects-link-container {
      padding-bottom: 2rem;

      .projects-link-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .projects-link-title-underline {
          width: 129px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }
      }

      .projects-link-description-container {
        font-size: 1.2rem;
        color: $light-grey;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        .projects-link-container {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 0.5rem;

          @media screen and (max-width: 768px) {
            margin-left: 0;
          }

          .projects-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .projects-link-underline {
            width: 230px;
            @include underline;
          }
        }
      }
    }
  }

  ul {
    list-style-type: square;
  }
}
</style>
