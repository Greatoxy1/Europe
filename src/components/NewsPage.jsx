export default function NewsPage() {
  const stories = [
    {
      category: "World",
      title: "Major developments reported as leaders respond to latest events",
      image: "/public/WL.webp",
      Description: "As of 2026 compared to some years ago , there are alot of increment in global developments as the leaders reactect about the modern system changing by the current generation with extraordinary knowledge and skils. Compare to 19th century and current 2000s the youths are puting the world in different shape arround all over the world trying to dinamically flex the system. Africa is one of the contenent devloping fast with Technical skils and modern knowledge compare to previours years Africa is awake and improving.",
      link:"https://Europe.globbalnews.com",
      featured: true,
    },
    {
      category: "Politics",
      title: "Government announces new plans following today's meeting",
      image: "/public/ti.jpg",
      Description: "As of August 15, 2026, Trump has publicly said the U.S. could keep control of the Strait of Hormuz after the war, and he has even suggested declaring it U.S. territory. Military control: If the U.S. defeats Iran decisively, it could potentially station naval forces around the strait and control which ships can safely pass. The U.S. already claims it has effective military control through its blockade.Legal ownership/sovereignty: No. Defeating Iran would not automatically give the United States sovereignty over the Strait. The waterway is bordered by Iran and Oman, and their territorial waters extend into it.",
      link:"https://Africa.globbalnews.com",
    },
    {
      category: "Business",
      title: "Markets rise as investors react to new economic data",
      image: "/public/TE.png",
      Description: "The new business groups that are helping people around the globe include Tahirus Enterprise, this Organization have well trained workers who have the morden knoledge about Business,software ,hardware and with accurate skills of web and app development. Those who want to start new business but doesnt know where to start from or needed assistance for your business you are on the right place just contact on shop.globbalnews.com, we have branches around all over the world, Europe , Africa  and Over ther world. ",
      link:"https://shop.globbalnews.com",
    },
    {
      category: "Technology",
      title: "New technology promises to change how people work",
      image: "/public/TM.png",
      Description: " Technology is one of the most influencial system in this modern world. Tahirus Enterprise provide services for those who want to have online shops, Logo, Apps , Websites,Domain and any other modern skils Tahirus Enterprise will welcome you with both hands, We train people and at the same time assist Business partners to grow their business. contact us on shop.globbalnews.com. ",
      link:"https://shop.globbalnews.com",
    },
    {
      category: "Sports",
      title: "The current sports and transfer windows. ",
      image: "/public/SP.jpeg",
      Description: "2026/27 premior League and spanish Laliga is going to be though this season as alot of transfer have taken place from both strong teams.  As of August 16, 2026, Mourinho is the current Real Madrid head coach. Madrid officially appointed him on a three-year contract through June 2029, returning to the club after 13 years. ⚽ Transfer market: PSG have completed the signing of Ferran Torres from Barcelona, while Atlético Madrid have brought in Cristian Romero from Tottenham. Barcelona are also pushing for Rodri from Manchester City. ⚾ MLB: a full Sunday slate includes Yankees–Blue Jays, Red Sox–Pirates, Cubs–Cardinals, Rockies–Giants and Rangers–A's. 🏈 NFL: preseason is underway, with Seattle's Devon Witherspoon agreeing to a 4-year, $132 million extension, a major CB-market benchmark.",
      link: "https://Sports.globbalnews.com",
    }
  ];

  return (
    <main className="news-page">
      <header className="header">
        <div className="logo">globbalnews.com</div>
        <nav>
          <a href="https://globbalnews.com">Home</a>
          <a href="https://Europe.globbalnews.com">World</a>
          <a href="https://Africa.globbalnews.com">Politics</a>
          <a href="https://Business.globbalnews.com">Business</a>
          <a href="https://shop.globbalnews.com">Technology</a>
          <a href="https://Sports.globbalnews.com">Sports</a>
        </nav>
      </header>

      <div className="breaking">
        <strong>BREAKING</strong>
        <span>Latest news and updates from around the world</span>
      </div>

      <section className="top-stories">
        {stories.map((story, index) => (
          <article
            key={index}
            className={story.featured ? "story featured" : "story"}
          >
            <img src={story.image} alt="" />

            <div className="story-content">
              <span className="category">{story.category}</span>
              <h2>{story.title}</h2>
              <a
                href={story.link}
                target={story.link.startsWith("http") ? "_blank" : undefined}
                rel={story.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
              <h3>Read the latest details and developments.</h3>
              </a>
                <p>{story.Description}</p>
              
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

