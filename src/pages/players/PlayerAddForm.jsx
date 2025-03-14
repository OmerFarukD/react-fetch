import React from 'react';

function PlayerAddForm() {
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Oyuncu Adı</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Oyuncu Soyadı</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Takım Id</label>
                <input type="number" className="form-control"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Pozisyon</label>
                <input type="text" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default PlayerAddForm;
