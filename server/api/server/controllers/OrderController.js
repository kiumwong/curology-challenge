import OrderService from "../services/OrderService";
import Util from "../utils/Utils";

const util = new Util();

class OrderController {
  static async addOrder(req, res) {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.address.street1 ||
      !req.body.address.city ||
      !req.body.address.state ||
      !req.body.address.zip ||
      !req.body.payment.ccNum ||
      !req.body.payment.exp ||
      !req.body.quantity ||
      !req.body.total
    ) {
      util.setError(400, "Please provide complete details.");
      return util.send(res);
    }
    const newOrder = req.body;

    try {
      const duplicateOrder = await OrderService.duplicateOrder(newOrder);
      if (duplicateOrder > 1) {
        util.setError(401, "A user with the information already exists.");
        util.send(res);
      }
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }

    try {
      const exceedsMaxOrder = await OrderService.duplicateOrder(newOrder);
      if (exceedsMaxOrder) {
        util.setError(
          402,
          "Magic potion order may not exceed maximum quanity of 3"
        );
        util.send(res);
      }
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }
    try {
      const createdOrder = await OrderService.addOrder(newOrder);
      util.setSuccess(201, "Your Order has been placed!", createdOrder);
      util.send(res);
    } catch (error) {
      util.setError(406, error);
      return util.send(res);
    }
  }

  static async updatedOrder(req, res) {
    const alteredOrder = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(403, "Please input a valid numeric value.");
      return util.send(res);
    }
    try {
      const updateOrder = await OrderService.updateOrder(id, alteredOrder);
      if (!updateOrder) {
        util.setError(404, `Resource not found on id: ${id}`);
      } else {
        util.setSuccess(204, "Resource updated", updateOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }
  }

  static async getAllOrders(req, res) {
    try {
      const allOrders = await OrderService.getAllOrders();
      if (allOrders.length > 0) {
        util.setSuccess(200, "Orders retrieved", allOrders);
      } else {
        util.setError(404, "Resource not found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }
  }

  static async getAOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(403, "Please input a valid numeric value.");
      return util.send(res);
    }

    try {
      const theOrder = await OrderService.getAOrder(id);

      if (!theOrder) {
        util.setError(404, `Resource not found: ${id}`);
      } else {
        util.setSuccess(200, "Found Order", theOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(403, "Please input a valid numeric value.");
      return util.send(res);
    }

    try {
      const OrderToDelete = await OrderService.deleteOrder(id);

      if (OrderToDelete) {
        util.setSuccess(200, "Resource deleted successfully");
      } else {
        util.setError(404, `Resource not found: ${id}`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(405, error);
      return util.send(res);
    }
  }
}

export default OrderController;
