import imageLogo from '../../images/Mind Miracle Center.webp';

import discordIcon from '../../images/Discord Icon.png';
import spotifyIcon from '../../images/Spotify Icon.png';
import instagramIcon from '../../images/Instagram Icon.png';
import youtubeIcon from '../../images/Youtube Icon.png';

import infoImg from '../../images/White.png';

import advisorLogo from '../../images/Mind Miracle Center.png';

import loveLogo from '../../images/Love.png';

export const coverObj = {
  headline: 'Do you want to start loving yourself?',
  description: 'Your self-love journey starts here.',
  buttonLabel: 'Let’s Go!',
};

export const greetObj = {
    headline: 'Hi, there! Nice to meet you.',
    paragraph: 'We are a youth-based organization raising awareness on self-love and mental health in Indonesia since 2018.',
}

export const dialObj = {
    headline: 'Feeling lonely? Dial 1-800-SLW on Spotify..'
}

export const communityObj = {
    headline: 'Be a Self Love Warrior!',
    subheadline: 'Only if you’re feeling brave... Get involved.',
    cardsComData: [
        {
            id: 1,
            imageUrl: instagramIcon, 
            imageName: 'instagramIcon',
            link: 'https://www.instagram.com/selflovewarrior.id/', 
            cardTitle: 'Instagram', 
            cardTextDesc: 'Learn more about mental health and self-love through visual contents.',
            buttonLabel: 'Follow Us',
        },
        {
            id: 2,
            imageUrl: youtubeIcon, 
            imageName: 'youtubeIcon',
            link: 'https://www.youtube.com/channel/UCxkUEZlfGOEntGoTnzxLq0w', 
            cardTitle: 'Youtube', 
            cardTextDesc: 'Watch our previous webinars and fun tea times again!',
            buttonLabel: 'VIsit Youtube',
        },
        {
            id: 3,
            imageUrl: discordIcon, 
            imageName: 'discordIcon',
            link: 'https://discord.gg/HTmgtMWp8T', 
            cardTitle: 'Discord', 
            cardTextDesc: 'Join SLW’s safe space and interact in Book club, Rants, Calming Exercises, and more.',
            buttonLabel: 'Join Discord',
        },
        {
            id: 4,
            imageUrl: spotifyIcon, 
            imageName: 'spotifyIcon',
            link: 'https://open.spotify.com/show/1v57eiSx5t85YRkORxKiEN', 
            cardTitle: 'Spotify', 
            cardTextDesc: 'Listen to a heartwarming track or insightful discussions on mental health issues.',
            buttonLabel: 'Listen Now',
        },
    ]
};

export const partnerObj = {
    headline:'See our past collaborations',
    buttonLabel:'Collaborate with us',
    partnerLogo: [
        {
            id: 1,
            logoName: 'Image-1',
            imageUrl: imageLogo,
        },
        {
            id: 2,
            logoName: 'Image-2',
            imageUrl: imageLogo,
        },
        {
            id: 3,
            logoName: 'Image-3',
            imageUrl:imageLogo,
        },
        {
            id: 4,
            logoName: 'Image-4',
            imageUrl:imageLogo,
        },
        {
            id: 5,
            logoName: 'Image-5',
            imageUrl:imageLogo,
        },
        {
            id: 6,
            logoName: 'Image-6',
            imageUrl:imageLogo,
        },
    ],
};

export const infoObj = {
    headline: 'Let’s stop making mental health boring.',
    buttonLabel1: 'Contact Us',
    buttonLabel2: 'Join Our Newsletter',
    imageUrl: infoImg,
    imageName: 'Image',
}

export const advisorObj = {
    headline: 'Our Official Advisor',
    imageUrl: advisorLogo,
    imageName: 'Mind Miracle Center',
    imageTitle: 'Mind Miracle Center',
    description: 'Mind Miracle Center is a family hypnotherapy center located in South Jakarta.',
    urlButton: 'https://mindmiraclecenter.com',
    buttonLabel: 'Learn More',
}

export const motivateObj = {
    imageUrl: loveLogo,
    imageName: 'loveLogo',
}