
export const useColumns= [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, renderCell:(params) =>{
        return (
            <div className="cellWithImg"> 
                <img className="cellImg" src={params.row.img} alt="avatar"></img>
                {params.row.username}
            </div>
        )
    } },
    {field: 'email', headerName: 'Email', width: 230},
    {field: 'age', headerName: 'Age', width: 130},
    {field: 'status', headerName: 'Status', width: 250, renderCell:(params) =>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}> 
                {params.row.status}
            </div>
        )
    } }
]
export const useRows=[
    {
        id:1,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7Fd3vbEQtd5k9J4CbisYln5zxnec9mTFLg&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
      },
      {
        id:2,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7Fd3vbEQtd5k9J4CbisYln5zxnec9mTFLg&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
      },
      {
        id:3,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo5tOBFV_uV5lXf9YT7fv6bK3PfQYl_iIaQ&usqp=CAUs",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
      },
      {
        id:4,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUkDvW-iV9widvM9F3K_uLYm8q4uUFtf6eQ&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
    {
        id:5,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOwKI_t48GgDw1EjJ9Z7NU1XhyqyQjagdjw&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
    {
        id:6,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6CC2gF5Yg1mVcOUVnbedHVMI8PvebYPcu4gE5DJ4_4MicQ2UW-PCM6JqDHr6GKLERXU&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
    {
        id:7,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDn0qEC-EQLGJHdXHcUFT3k6xWrF6I22kECsJHY07ETfI6aqVb5Q23XB3myTipbWCBao&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
    {
        id:8,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj1Uv-y5aUVIvHOKfO9dYYCC1b0KKc50ygA&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
    {
        id:9,
        username: "acer nitro" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zZJ5NwnVnbn75JUmyyXFDy3Y2nLwNu5m3Q&usqp=CAU",
        status:"Approved",
        email:"ma@gmail.com",
        age:20
    },
]