interface Crs {
	type: string;
	properties: Properties;
}

interface FeatureCollection<
	T =
		| PolygonFeature
		| MultiLinePointFeature
		| LineStringFeature
		| MultiLineStringFeature
		| PolygonFeature
		| MultiPolygonFeature,
> {
	type: string;
	name: string;
	crs: Crs;
	features: Array<T>;
}

type Properties = Record<string, never>;

interface PointFeature {
	type: string;
	properties: Properties;
	geometry: Point;
}
interface Point {
	type: "Point";
	coordinates: [number, number];
}

interface MultiLinePointFeature {
	type: string;
	properties: Properties;
	geometry: MultiLinePoint;
}
interface MultiLinePoint {
	type: "MultiLinePoint";
	coordinates: [number, number][];
}

interface LineStringFeature {
	type: string;
	properties: Properties;
	geometry: LineString;
}
interface LineString {
	type: "LineString";
	coordinates: [number, number][];
}

interface MultiLineStringFeature {
	type: string;
	properties: Properties;
	geometry: MultiLineString;
}

interface MultiLineString {
	type: "MultiLineString";
	coordinates: [number, number][][];
}

interface PolygonFeature {
	type: string;
	properties: Properties;
	geometry: Polygon;
}
interface Polygon {
	type: "Polygon";
	coordinates: [number, number][][];
}

interface MultiPolygonFeature {
	type: string;
	properties: Properties;
	geometry: MultiPolygon;
}
interface MultiPolygon {
	type: string;
	coordinates: [number, number][][][];
}
