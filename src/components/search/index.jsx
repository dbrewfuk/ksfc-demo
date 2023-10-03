import React, { Component } from "react";
import { GridView, List } from "@mui/icons-material";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          id: "https://kyfirecommission.kctcs.edu/about/annual_reports/FY2022%20Annual%20Report%20Digital.pdf",
          title: "Kentucky Fire Commission Annual Report FY2022",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filename: "Annual Report",
          filesize: "4MB",
          filetype: "PDF",
          tags: "Annual Report",
          category: "Annual Report",
        },
        {
          title: "Approved Equipment List",
          description: "Nunc tortor iaculis massa venenatis faucibus.",
          filesize: "2MB",
          filetype: "PDF",
          id: "https://kyfirecommission.kctcs.edu/about/Forms/2022%20State-Aid%20List.pdf",
          category: "State Aid",
        },
        {
          id: "https://kyfirecommission.kctcs.edu/about/Forms/2022%20-%202023%20Proof%20of%20Purchase%20Mar%202023.xlsx",
          title: "2022-2023 Proof of Purchase",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filesize: "2MB",
          filetype: "Excel",
          category: "State Aid",
        },
        {
          id: 4,
          title: "Kentucky Basic 1 Certification (115 Hours) ",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "PDF",
          filesize: "1MB",
          category: "Training Records",
        },
        {
          id: 5,
          title: "Quarterly Progress Report",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "PDF",
          filesize: "1MB",
          category: "Training Facility Grants",
        },
        {
          id: 6,
          title: "KCTCS Sub W-9 Form (Fillable Field PDF)",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "PDF",
          filesize: "1MB",
          category: "Sub W-9s",
        },
        {
          id: 7,
          title: "2022-2023 Proof of Purchase Instructions ",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "PDF",
          filesize: "1MB",
          category: "State Aid",
          url: "https://kyfirecommission.kctcs.edu/about/Forms/2022%20-%202023%20Proof%20of%20Purchase%20Instructions%20%20.xlsx.pdf",
        },
        {
          id: 8,
          title:
            "KY Fire Commission Financial Disclosure FY 21-22 Information ",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "Word",
          filesize: "1MB",
          category: "Financial Disclosure",
          url: "https://kyfirecommission.kctcs.edu/about/financial_disclosures/FY21-22%20Financial%20Disclosure%202.docx",
        },
        {
          id: 9,
          title: "KY Fire Commission FY21-22 Financial Disclosure Report ",
          description: "Lorem ipsum dolor sit amet consectetur.",
          filetype: "PDF",
          filesize: "1MB",
          category: "Financial Disclosure",
          url: "https://kyfirecommission.kctcs.edu/about/financial_disclosures/FY21-22%20Financial%20Disclosure%20-%20Explanatory.pdf",
        },
      ],
      searchQuery: "", // Initialize the search query state
      isListView: true, // default list view
      categories: [],
      filteredResources: [],
      selectedCategories: [],
    };
    this.state.categories = [
      ...new Set(this.state.resources.map((resource) => resource.category)),
    ];
    this.state.filteredResources = this.state.resources;
  }

  handleTagClick = (category) => {
    const selectedCategories = [...this.state.selectedCategories];

    if (selectedCategories.includes(category)) {
      // Remove the category filter if it's already selected
      selectedCategories.splice(selectedCategories.indexOf(category), 1);
    } else {
      // Add the category filter
      selectedCategories.push(category);
    }

    // Apply both category and search filters together
    const filteredResources = this.applyFilters(
      selectedCategories,
      this.state.searchQuery,
    );

    this.setState({ selectedCategories, filteredResources });
  };

  handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();

    // Apply both category and search filters together
    const filteredResources = this.applyFilters(
      this.state.selectedCategories,
      query,
    );

    this.setState({ searchQuery: query, filteredResources });
  };

  applyFilters(categories, searchQuery = "") {
    return this.state.resources.filter((resource) => {
      const matchesCategory =
        categories.length === 0 || categories.includes(resource.category);

      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery) ||
        resource.description.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }

  toggleListView = () => {
    this.setState((prevState) => ({
      isListView: !prevState.isListView,
    }));
  };

  render() {
    // Filter resources based on the search query
    const { resources, searchQuery } = this.state;
    const filteredResources = resources.filter(
      (resource) =>
        (resource.title &&
          resource.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (resource.category &&
          resource.category.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    return (
      <>
        <section className="resources-search">
          <section class="page-intro">
            <div class="page-intro__wrapper">
              <h1 class="page-intro__headline">Resources</h1>
              <p class="page-intro__supporting-text">
                Our resources page offers a wide range of valuable materials,
                including forms, annual reports, and other downloads. Whether
                you're looking for important documentation, informational
                materials, or practical resources, you'll find everything you
                need to support your organization or individual requirements.
                Explore our collection and enhance your knowledge with our
                comprehensive resources.
              </p>
              <input
                type="text"
                placeholder=""
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
              />
            </div>
          </section>
          <section className="link-cards__categories">
            {this.state.categories.map((category) => (
              <div
                key={category}
                className={`tag${
                  this.state.selectedCategories.includes(category)
                    ? " active"
                    : ""
                }`}
                onClick={() => this.handleTagClick(category)}
              >
                {category}
              </div>
            ))}
          </section>
        </section>

        <section>
          <div className="link-cards__wrapper">
            <div
              className={
                this.state.isListView ? "link-cards" : "link-cards-grid"
              }
            >
              {this.state.filteredResources.map((resource) => (
                <div className="link-card" key={resource.id}>
                  <a className="link-card-inner" href={resource.url}>
                    <div className="link-card__content">
                      <div className="link-card__title">
                        {resource.title}{" "}
                        {resource.filetype && (
                          <span className="file-meta">
                            [{resource.filetype}, {resource.filesize}]
                          </span>
                        )}
                      </div>
                      <div className="link-card__supporting-text">
                        {resource.description}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
