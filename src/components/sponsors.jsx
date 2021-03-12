import React from 'react';

const data = [
  {
    name: 'Techincal Partners',
    list: [
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      },
    ],
  },
  {
    name: 'Food Partners',
    list: [
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/SonarSource%20-%20blanc.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Codame_Badge_Logo_08_white.png',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Datree_Logo_1_color%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/SonarSource%20-%20blanc.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Codame_Badge_Logo_08_white.png',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Datree_Logo_1_color%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      }, 
    ],
  },
  {
    name: 'Media Partners',
    list: [
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
        name: 'Google',
        description: 'Search Engine',
      },
      {
        redirectUrl:
          'https://www.google.com/search?client=firefox-b-d&q=google',
        logoUrl:
          'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
        name: 'Google',
        description: 'Search Engine',
      },
    ],
  },
];

const Card = ({ redirectUrl, logoUrl, name, description }) => (
  <div class='w-full max-w-sm mx-auto border border-base-light hover:border-primary sponsors-cards'>
    <a href={redirectUrl}>
      <div className='flex justify-center items-center bg-base-light w-full h-32 max-h-32'>
        <img className='sponsors-logo' src={logoUrl} alt={name} />
      </div>
      <div className='flex text-primary sponsors-content-box h-32 max-h-32 items-center'>
        <div className='align-middle px-5'>
          <h3 className='font-sans font-bold my-2'>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  </div>
);

const Sponsors = () => (
  <section id='sponsors'>
    <div className='pt-28'>
      {data.map((category, i) => {
        return (
          <div key={i} className='mb-24'>
            <h1 className='text-primary text-3xl sm:text-4xl'>
              {category.name}
            </h1>

            <hr className='border-t border-base-light my-5' />

            <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
              {category.list.map((sponsor, j) => {
                return (
                  <Card
                    redirectUrl={sponsor.redirectUrl}
                    logoUrl={sponsor.logoUrl}
                    name={sponsor.name}
                    description={sponsor.description}
                    key={`${i}_${j}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Sponsors;
