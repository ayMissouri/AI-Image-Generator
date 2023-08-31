import React, { useState, useEffect } from "react";

import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((post) => <Card key={post._id} {...post} />);
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#faf1fe] text-[32px]">
          Made by the community
        </h1>
        <p className="mt-2 text-[#faf1fe] text-[16px] max-w-[500px]">
          Browse through the recently generated images by our community
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#faf1fe] text-xl mb-3">
                Showing results for{" "}
                <span className="text-[#15efaa]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;