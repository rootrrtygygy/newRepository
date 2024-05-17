import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth_User from "../../authentication/Auth_User";

const Shortlisted = () => {
  const { http, user, token } = Auth_User();
  const [slist, setSlist] = useState([]);
  const [isShow, setcolor] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    http
      .get(`/show/shortlist/${id}`)
      .then((res) => {
        setSlist(res.data);
        console.log("ok", slist);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <div style={{ marginTop: "200px" }}>
      <main className="main__content_wrapper">
        <div className="container">
          <h4 className="text-center p-4">Shortlisted Profiles</h4>
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="text-center mt-2 mb-2">
                <Link to={"/dashboard"}>
                  <button
                    className=" text-white "
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      height: "30px",
                      backgroundColor: isShow ? "Red" : "white",
                      color: isShow ? "white" : "Red",
                      borderColor: "Red",
                      borderRadius: "5px",
                    }}
                    onMouseEnter={() => setcolor(true)}
                    onMouseLeave={() => setcolor(false)}
                  >
                    Go Back
                  </button>
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Profile Photo</th>
                      <th>Name</th>
                      <th>Date of Birth</th>
                      <th>Shortlist Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slist.map((profile, index) => (
                      <tr key={index}>
                        <td>
                          {/* <img src={profile.profile_photo_url} alt="Profile Photo" /> */}
                          <img
                            style={{ height: "70px", width: "70px" }}
                            src={
                              profile.member_user_img1
                                ? `https://admin.royalmarriagebureau.com/uploads/userimg/${profile.member_user_img1}`
                                : "https://th.bing.com/th/id/R.605bba7f14743385c0d9ee248fd0161f?rik=6vsd1aSThRnRcg&riu=http%3a%2f%2fwww.healthysmilesflintdentist.com%2fassets%2fimages%2ftemp-male-new.jpg&ehk=BGwWlxmx8IyqSxBbMEXL9FgCn6Ht4LDEYZ343x1CYe0%3d&risl=&pid=ImgRaw&r=0"
                            }
                            alt={`User ${user.id}`}
                          />
                        </td>
                        <td>{profile.first_name}</td>
                        <td>{profile.date_of_birth}</td>
                        <td className="text-end"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row mb-50 mt-50">
                <div className="col-md-2 offset-sm-5 "></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shortlisted;
