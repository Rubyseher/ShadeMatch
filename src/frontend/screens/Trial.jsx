import DragDrop from "../components/DragDrop";
import HeaderAppBar from "../components/HeaderAppBar";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

export default function Trial() {
  return (
    <div>
      <ResponsiveDrawer />
      <section className="max-w-750px mx-auto px-6">
        <h1 className="text-4xl font-semibold leading-tight text-gray-900">
          Find the <br />
          perfect outfit
        </h1>
        <p className="mt-4 text-lg text-gray-600">Upload a image and well tell you what goes best with it</p>
      </section>
      <DragDrop />
    </div>
  );
}
