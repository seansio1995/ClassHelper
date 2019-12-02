import React, { Component } from 'react';
import {Link} from "react-router-dom";
import DataTable from 'react-data-table-component';
import Button from "@material-ui/core/Button";


const data = [{ id: 1, rank: 1, name: 'Sean Jim', points : 1200 },
    { id: 2, rank: 2, name: 'Wales Black', points : 1080 },
    { id: 3, rank: 3, name: 'PUBKing', points : 970 },
    { id: 4, rank: 4, name: 'ACRush', points : 927 },
    { id: 5, rank: 5, name: 'Lily4Fun', points : 877 },
    { id: 6, rank: 6, name: 'Yellow Man', points : 822 }
];
const columns = [
    {
        name: 'Rank',
        selector: 'rank',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Points',
        selector: 'points',
        sortable: true,
    },
];
class RankBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <Link to = "/instructorHomepage" style = {linkStyle}>
                        <h1>Class Helper <i className="fas fa-graduation-cap" ></i></h1>
                    </Link>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    <Link to="instructorquiz"> Back </Link>
                </Button>

                <div style={headerStyle}>
                    <h3>Leader Board</h3>
                </div>
                <DataTable
                    title=""
                    columns={columns}
                    data={data}
                />
            </div>
        )
    }
}

const pageStyle = {
    textAlign: "center"
}

const headerStyle = {
    fontSize : "30px",
    textAlign : "center"
}

const linkStyle = {
    textDecoration: 'none',
    color : "#000000"
}

export default RankBoard;