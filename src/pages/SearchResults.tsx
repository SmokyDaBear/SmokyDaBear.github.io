import { useMemo } from "react";
import { faqs, projects, services } from "../data";
import { SearchBar } from "../Components/SearchBar";

type SearchResult = {
  title?: string;
  description: string;
  type: "project" | "service" | "faq";
  image?: string;
  icon?: string;
  tags?: string[];
  link?: string;
  id?: string | number;
  score: number;
};

function SearchResultCard(result: SearchResult) {
  if (result.type === "faq") {
    return (
      <div className="search-result-card">
        <div className="search-result-content">
          <h3 className="search-result-title">{result.title}</h3>
          <p className="search-result-description">{result.description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="search-result-card">
      {result.type === "project" && result.image && (
        <img
          src={result.image}
          alt={result.title + " image"}
          className="search-result-image"
        />
      )}
      {result.type === "service" && result.icon && (
        <img
          src={result.icon}
          alt={result.title + " icon"}
          className="search-result-image"
        />
      )}
      <div className="search-result-content">
        <h3 className="search-result-title">{result.title}</h3>
        <p className="search-result-description">{result.description}</p>

        <a
          href={result.link || "#"}
          className="square-btn bg-shift"
          target="_blank"
          rel="noopener noreferrer"
        >
          View {result.type === "project" ? "Project" : "Service"}
        </a>
      </div>
    </div>
  );
}

export function SearchResults() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get("q") || "";
  const results = useMemo(() => {
    const query = searchText.toLowerCase().trim();
    const foundResults: SearchResult[] = [];

    // Search through projects
    projects.forEach((project) => {
      let score = 0;
      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const tagsMatch = project.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      if (titleMatch) score += 10;
      if (descMatch) score += 5;
      if (tagsMatch) score += 3;

      if (
        score > 0 ||
        query.includes("project") ||
        query.includes("projects") ||
        query === ""
      ) {
        foundResults.push({
          title: project.title,
          description: project.description,
          type: "project",
          image: project.image,
          tags: project.tags,
          link: project.pageUrl || "#",
          id: project.id,
          score,
        });
      }
    });

    // Search through services
    services.forEach((service) => {
      let score = 0;
      const titleMatch = service.name.toLowerCase().includes(query);
      const descMatch = service.description.toLowerCase().includes(query);
      const longDescMatch = service.descriptionLong
        ?.toLowerCase()
        .includes(query);

      if (titleMatch) score += 10;
      if (descMatch) score += 5;
      if (longDescMatch) score += 3;

      if (
        score > 0 ||
        query.includes("service") ||
        query.includes("services") ||
        query.includes("offering") ||
        query.includes("offerings") ||
        query === ""
      ) {
        foundResults.push({
          title: service.name,
          description: service.description,
          type: "service",
          icon: service.icon,
          score,
          link: "#services",
        });
      }
    });

    faqs.forEach((faq) => {
      let score = 0;
      const questionMatch = faq.question.toLowerCase().includes(query);
      const answerMatch = faq.answer.toLowerCase().includes(query);

      if (questionMatch) score += 10;
      if (answerMatch) score += 5;

      if (score > 0) {
        foundResults.push({
          title: faq.question,
          description: faq.answer,
          type: "faq",
          score,
        });
      }
    });

    // Sort by relevance score (highest first)
    return foundResults.sort((a, b) => b.score - a.score);
  }, [searchText]);

  return (
    <>
      <section className="search-results-container">
        <div className="center-flex m-auto">
          <SearchBar initialValue={searchText} />
        </div>
        <h1>Search Results</h1>
        <p>
          {searchText ? (
            <>
              Found <strong>{results.length}</strong> result
              {results.length !== 1 ? "s" : ""} for "
              <strong>{searchText}</strong>"
            </>
          ) : (
            "Enter a search query to find projects and services"
          )}
        </p>

        <div className="search-results-list">
          {results.length > 0 ? (
            results.map((result) => (
              <SearchResultCard
                key={`${result.type}-${result.id ? result.id : result.title}`}
                {...result}
              />
            ))
          ) : searchText ? (
            <div className="center-flex">
              <p>
                No results found for "<strong>{searchText}</strong>". Try a
                different search term.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
