import React, { useState } from "react";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0,75) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "     ...read more" : "    ...show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="container">
	<p className="text-2xl text-gray-500">
		<ReadMore>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, saepe libero laudantium explicabo eum impedit? Saepe, ipsam. Numquam facere, repellendus quam, voluptate expedita et aliquam suscipit sunt, unde vero voluptatum.
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
