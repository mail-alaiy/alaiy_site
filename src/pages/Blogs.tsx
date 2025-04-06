import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  imageUrl: string;
}

interface MediumItem {
  guid: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mail_99211"
        );
        const data = await response.json();


        const blogData: BlogPost[] = data.items.map((item: MediumItem) => {
          const imageMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          const imageUrl = imageMatch ? imageMatch[1] : "https://via.placeholder.com/500";
          return {
          id: item.guid,
          title: item.title,
          description: item.description.replace(/<[^>]+>/g, ""),
          link: item.link,
          date: new Date(item.pubDate).toDateString(),
          imageUrl: item.thumbnail || imageUrl,
          }
        });

        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching Medium blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We talk tech, people and everything in between
          </p>

          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 animate-pulse h-64 rounded-lg"
                ></div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {blogs.map((blog) => (
                <a
                  key={blog.id}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                        <h2 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {truncateText(blog.description, 200)}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-primary font-medium">
                        Read on Medium
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              This page auto-populates from our Medium posts.
              <br />
              Visit our{" "}
              <a
                href="https://medium.com/@mail_99211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                profile
              </a>{" "}
              for more articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
