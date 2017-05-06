import React from 'react';
import PropTypes from 'prop-types';

import './styles/Article.scss';

const Article = ({ newsArticles }) => (
  <div className="news-list">
    {newsArticles.map(article => (
      <div className="article-wrapper" key={article.url}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img className="news-image" src={article.urlToImage} alt={article.title} />
          <div className="news-details">
            <p className="news-title">{article.title}</p>
            <p className="news-description">{article.description}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
);

Article.propTypes = {
  newsArticles: PropTypes.array.isRequired,
};

export default Article;

// Article.defaultProps = {
//   newsArticles: [
//     {
//       author: "Mix",
//       title: "Microsoft is forcing Windows 10 S users to rely on Edge and Bing by default",
//       description: "Microsoft unveiled its brand new Chrome OS challenger, Windows 10 S, at a special event in New York yesterday, but it turns out the company has a nasty surprise in store for early ...",
//       url: "https://thenextweb.com/microsoft/2017/05/03/microsoft-windows-10-s-browser-edge/",
//       urlToImage: "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-03-at-12.36.56.png",
//       publishedAt: "2017-05-03T13:19:20Z",
//     },
//     {
//       author: "Francis Turner",
//       title: "No Ralph Nader, “fake news” is not advertising’s fault",
//       description: "I know advertising isn’t an industry viewed with a whole lot of trust. Gallup polling year after year puts perception of ethics for our ilk alongside senators and car salespeople. ...",
//       url: "https://thenextweb.com/opinion/2017/05/03/fake-news-not-advertisings-fault/",
//       urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/fakenews.jpg",
//       publishedAt: "2017-05-03T12:56:46Z",
//     },
//     {
//       author: "Mix",
//       title: "Slack makes it easier for teams to hook up freelancers with guest accounts",
//       description: "Slack wants to streamline the process for granting temps and freelancers access to your team's communication.\r\n\r\nThe company is introducing two new updates to help administrators easily ...",
//       url: "https://thenextweb.com/apps/2017/05/03/slack-freelancer-guest-account/",
//       urlToImage: "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-03-at-11.08.37.jpg",
//       publishedAt: "2017-05-03T12:22:13Z",
//     },
//     {
//       author: "Abhimanyu Ghoshal",
//       title: "Microsoft’s new font promotes freedom of expression in a state ranked 119th for press freedom",
//       description: "Last weekend, Microsoft unveiled 'Dubai', a totally free font whose matching Latin and Arabic scripts were designed in tandem, with a view to increase legibility on screens.\r\n\r\nBorn ...",
//       url: "https://thenextweb.com/dd/2017/05/03/microsoft-made-a-font-for-the-uae-but-got-its-sales-pitch-all-wrong/",
//       urlToImage: "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Dubai-hed.jpg",
//       publishedAt: "2017-05-03T12:13:08Z",
//     },
//     {
//       author: "Matthew Hughes",
//       title: "9GAG carved a shrine to meme culture and buried it in the desert",
//       description: "Memes are ephemeral, and by their nature, have a limited shelf-life. Their lifespan starts with only by a handful of Internet-savvy folks knowing about them - almost like an inside ...",
//       url: "https://thenextweb.com/insider/2017/05/03/9gag-carved-a-shrine-to-meme-culture-and-buried-it-in-the-desert/",
//       urlToImage: "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Panorama_Front_featured.jpg",
//       publishedAt: "2017-05-03T12:00:07Z",
//     },
//     {
//       author: "Ben Dickson",
//       title: "This is what fraud looks like in the age of Artificial Intelligence",
//       description: "You’re summoned to court where a ton of evidence including phones calls, handwritten notes, emails and chat logs undeniably prove your complicity in a crime. \r\n\r\nThe problem is, none ...",
//       url: "https://thenextweb.com/artificial-intelligence/2017/05/03/what-fraud-looks-like-in-the-age-of-artificial-intelligence/",
//       urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/01/shutterstock_169002578_robot.jpg",
//       publishedAt: "2017-05-03T10:53:09Z",
//     },
//     {
//       author: "Abhimanyu Ghoshal",
//       title: "iPhone 8 may not arrive until next year",
//       description: "Analysts from Deutsche Bank noted in a report from ValueWalk that Apple's next iPhone launch may be delayed until sometime next year.\r\n\r\nThat's from sources at Apple's manufacturing ...",
//       url: "https://thenextweb.com/apple/2017/05/03/iphone-8-may-not-arrive-until-next-year/",
//       urlToImage: "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/02/iphone-8-.png",
//       publishedAt: "2017-05-03T10:17:49Z",
//     },
//     {
//       author: "Abhimanyu Ghoshal",
//       title: "A free upgrade to Windows 10 Pro might make Windows S laptops worth buying",
//       description: "Microsoft didn't have to do a whole lot to build Windows 10 S: it essentially is a pared-down version of Windows 10 that restricts you to apps from the Windows Store and could therefore ...",
//       url: "https://thenextweb.com/microsoft/2017/05/03/a-free-upgrade-to-windows-10-pro-might-make-windows-s-laptops-worth-buying/",
//       urlToImage: "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Acer-TravelMate-B1.jpg",
//       publishedAt: "2017-05-03T08:55:34Z",
//     },
//     {
//       author: "Abhimanyu Ghoshal",
//       title: "Samsung joins the self-driving car race as it preps for testing in South Korea",
//       description: "South Korean regulatory authorities have cleared Samsung to begin testing its self-driving vehicle tech in the country, reports The Wall Street Journal.\r\n\r\nThe company is slated to ...",
//       url: "https://thenextweb.com/cars/2017/05/03/samsung-joins-the-self-driving-car-race-as-it-gears-up-to-begin-testing-in-south-korea/",
//       urlToImage: "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Samsung-hed.jpg",
//       publishedAt: "2017-05-03T08:02:55Z",
//     },
//     {
//       author: "Abhimanyu Ghoshal",
//       title: "Google Maps gets a custom home screen for easier navigation across India",
//       description: "Google is updating its Maps service for Android users in India so it's easier to navigate across the country right from the moment you launch the app.\r\n\r\nThe home screen on Maps has ...",
//       url: "https://thenextweb.com/apps/2017/05/03/google-maps-gets-a-custom-home-screen-for-easier-navigation-across-india/",
//       urlToImage: "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Google-Maps-India.jpg",
//       publishedAt: "2017-05-03T06:59:57Z",
//     },
//   ],
// };
