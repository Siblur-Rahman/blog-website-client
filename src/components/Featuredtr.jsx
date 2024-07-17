
const Featuredtr = ({blog, index}) => {
    const {photo, blog_title, blogger}=blog;
    return (
        <tr>
                            <th>{index+1}</th>
                            <td>{blog_title}</td>
                            <td>{blogger.name}</td>
                            <td><img src={blogger.photo} alt="" className="w-10 rounded-full h-10" /></td>
                        </tr>
    );
};

export default Featuredtr;
//