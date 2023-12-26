import React from "react";
import Badge from "./subComponents/Badge";
import TableCellAvatar from "./subComponents/TableCellAvatar";
import "./index.css";
function Table() {
  return (
    <>
      <table>
        <thead>
          <tr className="d-flex">
            <td className="h1">Teachers</td>
            <td className="align-self-center" colspan="5">
              <div className="align-self-center ms-5">
                <Badge
                  count="100"
                  name="Teachers"
                  color="blue"
                  font_color=" text-primary"
                />
              </div>
            </td>
          </tr>
          <tr className="">
            <th>Name</th>
            <th>Status</th>
            <th>Teacher Grade</th>
            <th>Email address</th>
            <th>Previous School</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <TableCellAvatar name="Ravien Dalpe" handle="@dala" />
            </td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-success"
                name="Active"
                color="background-green"
                font_color=" text-success"
              />
            </td>
            <td>Grade 1</td>
            <td>dala@gma.cd</td>
            <td className="mx-2">
              <Badge
                item="dote"
                doteColor="bg-warning"
                name="STCB"
                color="background-yellow"
                font_color=" text-warning"
              />

              <Badge
                item="dote"
                doteColor="bg-primary"
                name="S.J.C B/W"
                color="background-blue"
                font_color=" text-primary"
              />

              <Badge
                item="dote"
                doteColor="bg-purple"
                name="M.M.V B/W"
                color="background-purple"
                font_color=" text-purple"
              />
            </td>

            <td>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_32623)">
                  <path
                    d="M14.1667 2.5C14.3856 2.28113 14.6455 2.10752 14.9314 1.98906C15.2174 1.87061 15.5239 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7354 1.98906C17.0214 2.10752 17.2812 2.28113 17.5001 2.5C17.719 2.71887 17.8926 2.97871 18.011 3.26468C18.1295 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1295 4.7827 18.011 5.06866C17.8926 5.35463 17.719 5.61447 17.5001 5.83334L6.25008 17.0833L1.66675 18.3333L2.91675 13.75L14.1667 2.5Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_32623">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </td>
          </tr>

          <tr>
            <td>
              <TableCellAvatar name="Ravien Dalpe" handle="@dala" />
            </td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-danger"
                name="Inactive"
                color="background-red"
                font_color=" text-danger"
              />
            </td>
            <td>Grade 1</td>
            <td>pala@gma.cd</td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-warning"
                name="STCB"
                color="background-yellow"
                font_color=" text-warning"
              />

              <Badge
                item="dote"
                doteColor="bg-primary"
                name="S.J.C B/W"
                color="background-blue"
                font_color=" text-primary"
              />

              <Badge
                item="dote"
                doteColor="bg-purple"
                name="M.M.V B/W"
                color="background-purple"
                font_color=" text-purple"
              />
            </td>
            <td>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_32623)">
                  <path
                    d="M14.1667 2.5C14.3856 2.28113 14.6455 2.10752 14.9314 1.98906C15.2174 1.87061 15.5239 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7354 1.98906C17.0214 2.10752 17.2812 2.28113 17.5001 2.5C17.719 2.71887 17.8926 2.97871 18.011 3.26468C18.1295 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1295 4.7827 18.011 5.06866C17.8926 5.35463 17.719 5.61447 17.5001 5.83334L6.25008 17.0833L1.66675 18.3333L2.91675 13.75L14.1667 2.5Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_32623">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </td>
          </tr>

          <tr>
            <td>
              <TableCellAvatar name="Ravien Dalpe" handle="@dala" />
            </td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-success"
                name="Active"
                color="background-green"
                font_color=" text-success"
              />
            </td>
            <td>Grade 1</td>
            <td>dala@gma.cd</td>
            <td className="mx-2">
              <Badge
                item="dote"
                doteColor="bg-warning"
                name="STCB"
                color="background-yellow"
                font_color=" text-warning"
              />

              <Badge
                item="dote"
                doteColor="bg-primary"
                name="S.J.C B/W"
                color="background-blue"
                font_color=" text-primary"
              />

              <Badge
                item="dote"
                doteColor="bg-purple"
                name="M.M.V B/W"
                color="background-purple"
                font_color=" text-purple"
              />
            </td>

            <td>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_32623)">
                  <path
                    d="M14.1667 2.5C14.3856 2.28113 14.6455 2.10752 14.9314 1.98906C15.2174 1.87061 15.5239 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7354 1.98906C17.0214 2.10752 17.2812 2.28113 17.5001 2.5C17.719 2.71887 17.8926 2.97871 18.011 3.26468C18.1295 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1295 4.7827 18.011 5.06866C17.8926 5.35463 17.719 5.61447 17.5001 5.83334L6.25008 17.0833L1.66675 18.3333L2.91675 13.75L14.1667 2.5Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_32623">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </td>
          </tr>

          <tr>
            <td>
              <TableCellAvatar name="Ravien Dalpe" handle="@dala" />
            </td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-danger"
                name="Inactive"
                color="background-red"
                font_color=" text-danger"
              />
            </td>
            <td>Grade 1</td>
            <td>pala@gma.cd</td>
            <td>
              <Badge
                item="dote"
                doteColor="bg-warning"
                name="STCB"
                color="background-yellow"
                font_color=" text-warning"
              />

              <Badge
                item="dote"
                doteColor="bg-primary"
                name="S.J.C B/W"
                color="background-blue"
                font_color=" text-primary"
              />

              <Badge
                item="dote"
                doteColor="bg-purple"
                name="M.M.V B/W"
                color="background-purple"
                font_color=" text-purple"
              />
            </td>
            <td>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_32623)">
                  <path
                    d="M14.1667 2.5C14.3856 2.28113 14.6455 2.10752 14.9314 1.98906C15.2174 1.87061 15.5239 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7354 1.98906C17.0214 2.10752 17.2812 2.28113 17.5001 2.5C17.719 2.71887 17.8926 2.97871 18.011 3.26468C18.1295 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1295 4.7827 18.011 5.06866C17.8926 5.35463 17.719 5.61447 17.5001 5.83334L6.25008 17.0833L1.66675 18.3333L2.91675 13.75L14.1667 2.5Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_32623">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="6" className="text-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-between">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>

                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Table;
