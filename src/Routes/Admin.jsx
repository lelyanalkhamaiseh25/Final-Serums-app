import React, { useEffect, useState } from "react";
import "../Style/Admin.css";

function Admin({ user }) {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        img: "",
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-role": user.role,
            },
            body: JSON.stringify(newProduct),
        });
        setNewProduct({ name: "", price: "", description: "", img: "" });
        fetchProducts();
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:5000/api/products/${editingProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-role": user.role,
            },
            body: JSON.stringify(editingProduct),
        });
        setEditingProduct(null);
        fetchProducts();
    };

    const handleDeleteProduct = async (id) => {
        await fetch(`http://localhost:5000/api/products/${id}`, {
            method: "DELETE",
            headers: {
                "x-role": user.role,
            },
        });
        fetchProducts();
    };

    return (
        <div className="admin-container">
            <h1>🛠 Admin Dashboard</h1>
            <p>Welcome {user.email} </p>

            <div className="admin-form">
                <h2>Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image path (e.g. /assets/serum1.webp)"
                        value={newProduct.img}
                        onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, description: e.target.value })
                        }
                    />
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div className="admin-products">
                <h2>Manage Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>
                                    <img src={p.img} alt={p.name} width="50" />
                                </td>
                                <td>
                                    {editingProduct?.id === p.id ? (
                                        <input
                                            value={editingProduct.name}
                                            onChange={(e) =>
                                                setEditingProduct({ ...editingProduct, name: e.target.value })
                                            }
                                        />
                                    ) : (
                                        p.name
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === p.id ? (
                                        <input
                                            type="number"
                                            value={editingProduct.price}
                                            onChange={(e) =>
                                                setEditingProduct({ ...editingProduct, price: e.target.value })
                                            }
                                        />
                                    ) : (
                                        `$${p.price}`
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === p.id ? (
                                        <textarea
                                            value={editingProduct.description}
                                            onChange={(e) =>
                                                setEditingProduct({
                                                    ...editingProduct,
                                                    description: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        p.description
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === p.id ? (
                                        <>
                                            <button className="adminBtn" onClick={handleUpdateProduct}>Save</button>
                                            <button className="adminBtn" onClick={() => setEditingProduct(null)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="adminBtn" onClick={() => setEditingProduct(p)}>Edit</button>
                                            <button className="adminBtn" onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
