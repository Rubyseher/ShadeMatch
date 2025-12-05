import DragDrop from "../components/Utilities/DragDrop";
import ResponsiveDrawer from "../components/Utilities/ResponsiveDrawer";
import { Helmet } from "react-helmet-async";

export default function Trial() {
  return (
    <div>
      <ResponsiveDrawer />
      <Helmet>
        <title>Attiro | Outfit matcher</title>
        <meta name="description" content="Upload an outfit photo and Attiro suggests pieces from your closet that match." />
        <link rel="canonical" href="https://my-closet.example.com/" />
        <meta property="og:title" content="Attiro | Outfit matcher" />
        <meta property="og:description" content="Upload an outfit photo and Attiro suggests pieces from your closet that match." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-closet.example.com/" />
        <meta property="og:image" content="https://my-closet.example.com/social-share.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Attiro | Outfit matcher" />
        <meta name="twitter:description" content="Upload an outfit photo and Attiro suggests pieces from your closet that match." />
        <meta name="twitter:image" content="https://my-closet.example.com/social-share.png" />
      </Helmet>
      <main className="ml-0 lg:ml-[200px]">
        <div className="max-w-3xl mx-auto text-center">
          <section >
            <h1 className="text-4xl font-semibold leading-tight text-gray-900">
              Find the
              Perfect outfit
            </h1>
            <p className="mt-4 text-lg text-gray-600">Upload a image and well tell you what goes best with it</p>
          </section>
          <DragDrop />
        </div>
      </main>
    </div>
  );
}
