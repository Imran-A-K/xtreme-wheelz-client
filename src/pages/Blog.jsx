import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | Blog</title>
      </Helmet>
      <div>
        <h1 className="text-center text-4xl font-bold mt-5">Blog</h1>
        <div className="mt-20 px-7">
          <p className="text-3xl mb-5 font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p className="text-3xl mb-5 font-normal">
            Access tokens and refresh tokens are integral components of
            authentication systems used to secure and manage user sessions. An
            access token is a short-lived credential granted after successful
            authentication, representing authorization for accessing protected
            resources. It is included in requests to the server to authenticate
            and authorize the user. On the other hand, refresh tokens are
            long-lived credentials used to obtain new access tokens when the
            current one expires. They are securely stored on the client-side and
            sent to the server when the access token needs renewal. The server
            validates the refresh token and issues a new access token, allowing
            the client to maintain an active session without reauthentication.
            Access tokens are typically stored in memory or local storage for
            easy retrieval, while refresh tokens should be stored securely,
            using mechanisms like HTTP-only cookies or secure storage provided
            by mobile operating systems, as they have a longer lifespan and
            provide the means to obtain new access tokens.
          </p>
          <p className="text-3xl mb-5 font-semibold">
            Compare SQL and NoSQL databases
          </p>
          <p className="text-3xl mb-5 font-normal">
            SQL and NoSQL are two broad categories of database management
            systems, each with its own characteristics and use cases. Here's a
            comparison between SQL and NoSQL databases:
            <br />
            <span className="font-semibold">Data Model:</span> <br />
            SQL: Structured, with predefined schemas and relationships. <br />
            NoSQL: Flexible, with schema-less or dynamic schemas. <br />
            <span className="font-semibold">Scalability:</span> <br />
            SQL: Vertical scaling (adding more resources to a single server).{" "}
            <br />
            NoSQL: Horizontal scaling (distributing data across multiple
            servers). <br />
            <span className="font-semibold">Consistency: </span> <br />
            SQL: Strong consistency and ACID properties. <br />
            NoSQL: Flexible consistency models, often eventual consistency.{" "}
            <br />
            <span className="font-semibold">Query Language:</span> <br />
            SQL: Uses SQL (Structured Query Language) for querying. <br />
            NoSQL: Varies depending on the specific NoSQL database type. <br />
            <span className="font-semibold">Use Cases:</span> <br />
            SQL: Well-suited for structured data and applications requiring
            strong consistency. <br />
            NoSQL: Ideal for unstructured or semi-structured data, scalability,
            and flexibility. <br />
          </p>
          <p className="text-3xl mb-5 font-semibold">
            What is express js? What is Nest JS?
          </p>
          <p className="text-3xl mb-5 font-normal">
            <span className="font-semibold">Express js : </span>Express.js is a
            lightweight and flexible web framework designed for Node.js. It
            simplifies the process of building web applications and APIs by
            providing a minimalistic yet powerful set of features. With
            Express.js, developers can easily define routes, handle HTTP
            requests and responses, and implement middleware to add
            functionality to their applications. It follows the principle of
            simplicity and allows developers to quickly create server-side
            applications using JavaScript.
            <br />
            <span className="font-semibold">Nest js : </span> Nest.js is a
            cutting-edge web application framework that leverages the power of
            TypeScript and builds upon the solid foundation of Express.js. It
            offers developers an elegant and scalable solution for building
            server-side applications with ease. With its emphasis on modularity
            and maintainability, Nest.js encourages developers to organize their
            code into cohesive modules, enabling better code organization and
            reusability. The extensive use of decorators and metadata simplifies
            the process of defining routes, middleware, and other application
            components, making the codebase more readable and intuitive.
            Additionally, Nest.js seamlessly integrates with various tools and
            libraries commonly used in the Node.js ecosystem, enhancing its
            capabilities in areas such as database integration, authentication,
            and documentation. By embracing the principles of TypeScript and
            providing a rich feature set, Nest.js empowers developers to create
            robust and efficient web applications that scale effortlessly.
          </p>
          <p className="text-3xl mb-5 font-semibold">
            What is MongoDB aggregate and how does it work?
          </p>
          <p className="text-3xl mb-5 font-normal">
            MongoDB's aggregate is a versatile feature designed for data
            aggregation and processing within the database itself. It functions
            by applying a series of operations, known as pipeline stages, to a
            collection of documents. Each stage performs a specific task, such
            as filtering, grouping, projecting, or transforming the data. The
            output of one stage serves as the input for the next stage, creating
            a seamless flow of data processing. This approach allows for complex
            and intricate data manipulations to be executed efficiently and at
            scale, directly within the database. The aggregate feature empowers
            developers to perform advanced computations, generate insightful
            reports, and extract meaningful information from MongoDB
            collections, enabling data-driven decision making and analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
