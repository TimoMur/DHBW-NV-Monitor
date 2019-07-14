import React from 'react'

class CarRow extends React.Component {

    render() {

        //let bike = this.props.bike

        const strType = this.props.car.rentalObjectTypes.join(', ')

        const strAdress = this.props.car.address.street + " " + this.props.car.address.number

        return (
            <tr>
                <td>{strType}</td>
                <td>{strAdress}</td>
            </tr>
        )

    }

}

export default CarRow