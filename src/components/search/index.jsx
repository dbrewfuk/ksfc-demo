import React, { Component } from "react";

class Search extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          id: 1,
          title: "Fire Safety Prevention Manual",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filename: "File Name",
          filesize: "4MB",
          filetype: "PDF",
          tags: "Fire Safety Prevention, Training"
        },
        {
          id: 2,
          title: "Resource 2",
          description: "Nunc tortor iaculis massa venenatis faucibus.",
        },
        {
          id: 3,
          title: "Resource 3",
          description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 4,
          title: "Resource 4",
          description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 5,
          title: "Resource 5",
          description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
          id: 6,
          title: "Resource 6",
          description: "Lorem ipsum dolor sit amet consectetur.",
        },
      ],
      searchQuery: "", // Initialize the search query state
    };
  }

  handleSearchChange = (e) => {
    const query = e.target.value;
    this.setState({ searchQuery: query });
  };

  render() {
    // Filter resources based on the search query
    const filteredResources = this.state.resources.filter((resource) =>
      resource.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <>
        <section className="resources-search">
          <div className="resources-search__wrapper">
            <h1 className="resources-search__headline">Headline</h1>
            <input
              type="text"
              placeholder=""
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>
        </section>

        <section>
          <div className="link-cards__wrapper">
            
              <div className="link-cards">
              {filteredResources.map((resource) => (
                <div className="link-card" key={resource.id}>
                  <div className="link-card-inner">
                    <div className="link-card__content">
                      <div className="link-card__title">{resource.title}</div>
                      <div className="link-card__supporting-text">
                        {resource.description}
                      </div>
                      <div className="link-card__button">
                        <button
                          className="button button--text button--light button--icon"
                          onClick={() => this.handleDownload(resource.id)}
                        >
                         <span className="button__icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_143_87)">
                                <path
                                  d="M38 18H30V6H18V18H10L24 32L38 18ZM10 36V40H38V36H10Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_143_87">
                                  <rect width="48" height="48" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="button__label">{resource.filename} {resource.filetype}, {resource.filesize}</span>
                         
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
              </div>
          
          </div>
        </section>
      </>
    );
  }

  handleDownload(resourceId) {
    // Add your download logic here for the resource with the given ID
    // For example, you can trigger a file download or navigate to a download link.
    console.log(`Downloading resource with ID ${resourceId}`);
  }
}

export default Search;