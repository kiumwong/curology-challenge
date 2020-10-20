const database = require("../src/models");

class OrderService {
  static async addOrder(newOrder) {
    try {
      return await database.Order.create({
        firstName: newOrder.firstName,
        lastName: newOrder.lastName,
        email: newOrder.email,
        phone: newOrder.phone,
        street1: newOrder.address.street1,
        street2: newOrder.address.street2,
        city: newOrder.address.city,
        state: newOrder.address.state,
        zip: newOrder.address.zip,
        ccNum: newOrder.ccNum,
        exp: newOrder.exp,
        quantity: newOrder.quantity,
        total: newOrder.total,
        fulfilled: true,
      });
    } catch (error) {
      return error;
    }
  }

  static async getAllOrders() {
    try {
      return await database.Order.findAll();
    } catch (error) {
      return error;
    }
  }

  static async updateOrder(id, updateOrder) {
    try {
      const OrderToUpdate = await database.Order.findOne({
        where: { id: Number(id) },
      });

      if (OrderToUpdate) {
        await database.Order.update(updateOrder, {
          where: {
            id: Number(id),
            fulfilled: true,
          },
        });

        return updateOrder;
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  static async getAOrder(id) {
    try {
      const theOrder = await database.Order.findOne({
        where: { id: Number(id) },
      });

      return theOrder;
    } catch (error) {
      return error;
    }
  }

  static async duplicateOrders(newOrder) {
    try {
      return await database.Order.findAndCountAll({
        where: {
          firstName: newOrder.firstName,
          lastName: newOrder.lastName,
          email: newOrder.email,
          phone: newOrder.phone,
          street1: newOrder.address.street1,
        },
      });
    } catch (error) {
      return error;
    }
  }

  static async deleteOrder(id) {
    try {
      const OrderToDelete = await database.Order.findOne({
        where: { id: Number(id) },
      });

      if (OrderToDelete) {
        const deletedOrder = await database.Order.destroy({
          where: { id: Number(id) },
        });
        return deletedOrder;
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  //Need to rework logic

  static async exceedsMaxOrder(newOrder) {
    try {
      return await database.Order.findAll({
        where: {
          email: newOrder.email,
          quantity: {
            $gte: Sequelize.literal("COALESCE(SUM(quantity)"),
          },
        },
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = OrderService;
