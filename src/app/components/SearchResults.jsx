

function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-[#70757a] text-sm mb-5 mt-3 font-medium">
                About {results.searchInformation?.formattedTotalResults} results (
                {results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a
                            href={result.link}
                            className="text-sml text-stone-900"
                        >
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-[#1a0dab] group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2 text-gray-900">
                        {result.snippet}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;